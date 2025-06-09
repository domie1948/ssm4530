const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmukwx2/",
            name: "ssmukwx2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmukwx2/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "旅游资源网站"
        } 
    }
}
export default base
