import Vue from 'vue'
import * as types from './mutations-types';
import axios from 'axios'
const info = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
};
//获取使用保护数据
let url = "http://api-paiband-en-test.ptdev.cn/paiband/child/settings?appid=1108&uid=60008560%23!/&token=9f00a87e71674d17bed1238fb087fcb3&cid=60008576";
export const getWang = ({ commit }) => {
	fetch(url,info).then(function(res) {
		console.log(res);
	  	if (res.ok) {
		    res.json().then(function(response) {
		      	commit(types.WANG, response)
	    		console.log("response",response);
		    });
	  	} else {
	    	console.log("Looks like the response wasn't perfect, got status", res.status);
	  	}
	}, function(e) {
	  console.log("Fetch failed!", e);
	});
};