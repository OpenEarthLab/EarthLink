// 大视频的DOM
let bigVideoList = [...document.querySelectorAll("#bigVideoList > video")];
// 小视频的DOM
let videoList = [...document.querySelectorAll("#videoList > video")];
// 起始视频下标
let startIndex = 0;

videoList.forEach((video, index) => {
    // 添加点击事件
    video.addEventListener("click", (e) => {
        // 排他--大视频的切换效果
        for (let bigVideo of bigVideoList) {
            bigVideo.style.opacity = "0";
        }
        bigVideoList[index].style.opacity = "1";

        // 小视频的选中效果
        for (let smallVideo of videoList) {
            smallVideo.classList.remove("selectSmallVideo");
        }
        video.classList.add("selectSmallVideo");

        // 当点击指令视频的时候，记录当前下标
        setTimeout(() => {
            startIndex = index;
        }, 190);
    });

    // 播放完毕事件
    video.addEventListener("timeupdate", () => {
        var duration = video.duration; // 视频总时长
        var currentTime = video.currentTime; // 当前所在的时间段

        if (index != startIndex) {
            return;
        }

        // 当距离结束还有0.2s的时候：设置进行下一个视频的点击
        if (currentTime >= duration - 0.2) {
            setTimeout(() => {
                // 在这里处理循环前的逻辑
                startIndex++;
                if (startIndex > 3) {
                    startIndex = 0;
                }
                videoList[startIndex].click();
            }, 190);
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
    videoList[0].click();
});


// 新的大视频列表的DOM
let bigVideoList2 = [...document.querySelectorAll("#bigVideoList2 > video")];
// 新的小视频列表的DOM
let videoList2 = [...document.querySelectorAll("#videoList2 > video")];
// 起始视频下标
let startIndex2 = 0;

videoList2.forEach((video, index) => {
    // 添加点击事件
    video.addEventListener("click", (e) => {
        // 排他--新大视频的切换效果
        for (let bigVideo of bigVideoList2) {
            bigVideo.style.opacity = "0";
        }
        bigVideoList2[index].style.opacity = "1";

        // 小视频的选中效果
        for (let smallVideo of videoList2) {
            smallVideo.classList.remove("selectSmallVideo");
        }
        video.classList.add("selectSmallVideo");

        // 记录当前下标
        setTimeout(() => {
            startIndex2 = index;
        }, 190);
    });

    // 播放完毕事件
    video.addEventListener("timeupdate", () => {
        var duration = video.duration; // 视频总时长
        var currentTime = video.currentTime; // 当前播放时间

        if (index != startIndex2) {
            return;
        }

        // 当距离视频结束还有0.2秒时：自动点击下一个视频
        if (currentTime >= duration - 0.2) {
            setTimeout(() => {
                startIndex2++;
                if (startIndex2 > 3) {
                    startIndex2 = 0;
                }
                videoList2[startIndex2].click(); // 自动点击下一个视频
            }, 190);
        }
    });
});

// 页面加载完成后，自动点击第一个视频
window.addEventListener("DOMContentLoaded", () => {
    videoList2[0].click(); // 自动点击第一个小视频
});
