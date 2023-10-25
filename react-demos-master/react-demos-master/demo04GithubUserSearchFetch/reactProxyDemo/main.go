// Demo 所需的后台代码，http://localhost:8080
package main

import (
	"bytes"
	"fmt"
	"github.com/gin-gonic/gin"
	"io"
	"net/http"
	"sync"
	"time"
)

func main() {
	server()
}
func fetch(q string) (string,error) {
	resp,err:=http.Get(`https://api.github.com/search/users?q=`+q)
	if err != nil {
		return "",err
	}
	//使用buffer和io.Copy存入数据
	var buf bytes.Buffer
	defer resp.Body.Close()
	if _,err =io.Copy(&buf, resp.Body);err !=nil {
		return "",err
	}
	//返回buf.String()
	return buf.String(),nil
}
func server() {
	// 创建一个并发安全的map
	usersData:=sync.Map{}

	//创建 gin 服务器
	r:=gin.Default()

	r.GET("/users", func(c *gin.Context) {
		q:=c.Query("q")
		var err error
		//从map中取得数据，如果有数据则直接发送，如果没有则从远程请求
		data,ok := usersData.Load(q)
		if !ok {
			//从远程请求数据
			data,err =fetch(q)
			if err != nil {
			    fmt.Println(err)
			    c.String(200,"%s",err)
			}

			fmt.Println("remote fetch")
			// 将数据存入map
			usersData.Store(q,data)
			// 创建一个goroutine，10s后删除map中的某个数据，实现“超时”效果
			go func(q string) {
				time.Sleep(120*time.Second)
				usersData.Delete(q)
			}(q)

			c.String(200,"%s",data)
		} else {
			fmt.Println("cache fetch")
			c.String(200,"%s",data)
		}
	})
	r.Run()
}