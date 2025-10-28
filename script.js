let likeCount = 0;
document.getElementById("likeBtn").addEventListener("click", () => {
  likeCount++;
  document.getElementById("likeCount").textContent = likeCount;
});

document.getElementById("commentBtn").addEventListener("click", () => {
  const commentInput = document.getElementById("commentInput");
  const commentList = document.getElementById("commentList");
  if (commentInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = commentInput.value;
    commentList.appendChild(li);
    commentInput.value = "";
  }
});
