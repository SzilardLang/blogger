/*
To use this method, insert the following line in your Blogger template:
<script expr:src='"https://cdn.jsdelivr.net/gh/szilardlang/blogger/authorization.js?blogId=" + data:blog.blogId'/>
*/

document.addEventListener('DOMContentLoaded', function() {
(function SolAuth(){
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const blogId = getQueryParam('blogId');
  if (blogId) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.blogger.com/dyn-css/authorization.css?targetBlogID=' + blogId;
    document.head.appendChild(link);
  }
})();
});
