(function SolAuth(){
  var blogId = document.body.getAttribute('data-blog-id');
  if (blogId) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.blogger.com/dyn-css/authorization.css?targetBlogID=' + blogId;
    document.head.appendChild(link);
  }
})();
