window.onload = function(){
    // 상단 마이페이지 리스트 반응
    const mypageBt = document.querySelector(".mypage-bt")
    const mypageList = document.querySelector(".mypage-list")
    mypageBt.onclick = function(){
        mypageList.classList.toggle("block")
    }
}