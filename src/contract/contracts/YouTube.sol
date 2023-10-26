// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

struct Video{
    string id;
    string title;
    string videoUrl;
    uint256 views;
    uint256 likes;
    uint256 timeStamp;
    address owner;
    string channelName;
    string channelImage;
}
struct Channel{
    string channelName;
    string channelImage;
    address owner;
    string[] videos;
}
contract YouTube {
    uint256 channelCounter = 0;
    uint256 videoCounter = 0;
    mapping (uint256 => Video) videos;
    mapping (address => Channel) channels;

    function createChannel (string memory _channelName, string memory _channelImage) public {
        channels[msg.sender].channelName = _channelName;
        channels[msg.sender].channelImage = _channelImage;
        channels[msg.sender].owner = msg.sender;
        channelCounter++;
    }

    function addVideo(string memory _id, string memory _title,  string memory _videoUrl, uint256 _views) public {
        videos[videoCounter] = Video(_id,_title,_videoUrl,_views,0,block.timestamp,msg.sender,channels[msg.sender].channelName,channels[msg.sender].channelImage);
        channels[msg.sender].videos.push(_id);
        videoCounter++;
    }

    function getAllVideos()public view returns(Video[] memory){
        Video[] memory allVideos = new Video[](videoCounter);
        for(uint256 i = 0; i<videoCounter;i++){
            allVideos[i] = videos[i];
        }
        return  allVideos;
    }
    function like(uint256  _videoIndex)public{
        videos[_videoIndex].likes += 1;
    }

    function getChannel(address _channelOwner)public  view returns(Channel memory){
        return channels[_channelOwner];
    }
}