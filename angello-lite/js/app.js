var myModule = angular.module('Angello', []);
myModule.factory('AngelloHelper', function(){
	var buildIndex = function(source, property){
		var tempArray = [];

		for(var i=0, len = source.length; ++i){
			tempArray[source[i][property]] = source[i];
		}

		return tempArray;
	};

	return {
		buildIndex: buildIndex
	};
});
myModule.service('AngelloModel', function(){
	var service = this;
	stories = [
		{
			title : '첫번째 스토리',
			description : '첫번째 사용자 스토리',
			criteria : '요구사항 정리 중...',
			status : '해야할 일',
			type : '기능',
			reporter : '웹지니',
			assignee : '웹지니'
		},
		{
			title : '두번째 스토리',
			description : '두번째 사용자 스토리',
			criteria : '요구사항 정리 중...',
			status : '백로그',
			type : '기능',
			reporter : '웹지니',
			assignee : '웹지니'
		},
		{
			title : '세번째 스토리',
			description : '세번째 사용자 스토리',
			criteria : '요구사항 정리 중...',
			status : '코드 리뷰',
			type : '개선',
			reporter : '웹지니',
			assignee : '웹지니'
		}
	];
	service.getStories = function(){
		return stories;
	}
});
myModule.controller('MainCtrl', function(){
	var main = this;

	main.stories = AngelloModel.getStories();

	main.createStory= function(){
		main.stories.push({
			title : '새 사용자 스토리',
			description : '설명을 입력하세요.',
			criteria : '요구사항 정리 중...',
			status : '백로그',
			type : '기능',
			reporter : '미정',
			assignee : '미정'
		});
	};
});
myModule.directive('story', function(){
	return {
		scope : true,
		replace : true,
		template : '<div><h4>{{story.title}}</h4><p><{{story.description}}/p></div>'
	}
});