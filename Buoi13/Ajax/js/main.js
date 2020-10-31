// console.log("axios",axios);
// console.log("typeof = ", typeof axios);
const baseUrl = 'http://api-meme-zendvn-01.herokuapp.com/api/';

var curentPage = 1;
var pageSize = 10;
var listPostsData = [];

function handleRenderHtmlString() {
  var htmlString = '<div class="row">';

  for (var index = 0; index < listPostsData.length; index++) {
    var postItem = listPostsData[index];
    htmlString += `<div class="col-4">
      <div class="card post-item">
        <div class="post-item__images">
          <img class="card-img-top" src="${postItem.url_image}" alt="TIeu de bai viet" />
        </div>
        <div class="card-body">
          <h5 class="card-title">${postItem.fullname}</h5>
          <p class="card-text">${postItem.post_content}</p>
        </div>
      </div>
    </div>`;
  }
  htmlString += '</div>';

  document.querySelector('.list-posts').innerHTML = htmlString;
}

function handleLoadMorePosts() {
  axios
    .get(`${baseUrl}/post/getListPagination.php?pagesize=${pageSize}&currPage=${curentPage}`)
    .then(function(response) {
      
      var nextListPosts = response.data.posts;

      if (nextListPosts.length === 0) {
        document
          .querySelector('#read-more')
          .style.display = 'none';
        return;
      }

      listPostsData = listPostsData.concat(nextListPosts); // Nối hai array lại với nhau
      handleRenderHtmlString()
      curentPage = curentPage + 1;  
    })
    .catch(function (error) {
      console.log("error",error);
    });
}

handleLoadMorePosts(); // Gọi mở đầu 1 lần

document
  .querySelector('#read-more')
  .addEventListener('click', handleLoadMorePosts)



