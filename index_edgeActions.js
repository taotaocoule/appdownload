/***********************
* Adobe Edge Animate 组件动作
*
* 小心编辑这个文件，小心保存
* 函数签名和注释以“Edge”起始来维持
* 通过 Adobe Edge Animate 使动作可以交互
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Android}", "click", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         // 在新窗口中导航到新的URL
          window.open("http://a.app.qq.com/o/simple.jsp?pkgname=com.example.bianlidai", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${IOS}", "click", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         // 在新窗口中导航到新的URL
          window.open("https://itunes.apple.com/cn/app/123bian-li-dai/id1033051325?mt=8", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9440194");