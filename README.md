## 技术栈
> vue + vuex + vue-router + es6 + webpack + fetch

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
## vuex 工作流程
* store-组合包装
* state-数据库
* getter-取数据(从数据库state取数据)
* mutation-存数据(存入数据库state)
* mutation-types(使用常量替代Mutation事件类型-把这些常量放在单独的文件中可以让你的代码和开发人员对整个app包含的mutation一目了然)
* actions-拿到了数据，处理完了再存到数据库中
* action处理数据，然后通过mutation 把处理后的数据放入数据库（state）中，谁要用就通过getter从数据库（state）中取


## vuex 路由工作流程
* vue-router首先会去查找v-link指令的路由映射
然后根据路由映射找到匹配的组件
最后将组件渲染到<router-view>标签
* 在使用了 vue-router 的应用中，路由对象会被注入每个组件中，赋值为 this.$route ，并且当路由切换时，路由对象会被更新。


# 路由对象暴露了以下属性:
  **$route.path**
> 字符串，等于当前路由对象的路径，会被解析为绝对路径，如 "/home/news"

  **$route.params**
> 对象，包含路由中的动态片段和全匹配片段的键值对

  **$route.query**
> 对象，包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes ，会得到$route.query.favorite == 'yes'

  **$route.router**
> 路由规则所属的路由器（以及其所属的组件)

  **$route.matched**
> 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象

  **$route.name**
> 当前路径的名字，如果没有使用具名路径，则名字为空