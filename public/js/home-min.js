angular.module("home",[]).factory("FeedFactory",function(c){var a=function(d){this.type=d;this.token=null};a.prototype.init=function(){this.token=$("#feedstory").attr("token");var d=this.token;var g=$("#feedstory").attr("channel");var f=$("#feedstory").attr("content");var h=new FeedFactory();var e=new Pusher("6ead2ac897d2ccdaf367",{authEndpoint:"http://feed.4linked.com/auth/"+d});var g=e.subscribe("private-"+g);g.bind("pusher:subscription_succeeded",function(){b(d,0)});g.bind(f,function(i){h.append(i)})};a.prototype.next=function(d){b(this.token,d)};function b(d,e){c.get("http://feed.4linked.com/me/"+d+"/"+e)}return a}).controller("InitHome",function(a){$(document).ready(function(){$("[data-toggle=offcanvas]").click(function(){$(this).toggleClass("visible-xs text-center");$(this).find("i").toggleClass("glyphicon-chevron-right glyphicon-chevron-left");$(".row-offcanvas").toggleClass("active");$("#lg-menu").toggleClass("hidden-xs").toggleClass("visible-xs");$("#xs-menu").toggleClass("visible-xs").toggleClass("hidden-xs");$("#btnShow").toggle()})})}).controller("NewsFeed",function(a,b){a.feed=null;a.page=0;a.blocked=false;a.currentHeight=0;$(document).ready(function(){if(a.feed==null){a.feed=new b()}a.feed.init();$("#main").scroll(function(){var c=document.getElementById("main").scrollHeight-$("#main").height();if((c==$("#main").scrollTop())&&!a.blocked){a.blocked=true;a.loadMore();a.currentHeight=c}else{if(a.blocked){var c=document.getElementById("main").scrollHeight-$("#main").height();if(a.currentHeight<c){a.blocked=false}}}})});a.loadMore=function(){a.page++;a.feed.next(a.page)}});