!function(t){t.fn.SocialCounter=function(e){function s(){t.ajax({url:"https://api.github.com/users/"+_.github_user,dataType:"jsonp",type:"GET",success:function(e){var s=parseInt(e.data.user.follower_count),o=r(s);t("#socialcounter .social_item.social_github .count").append(o),t("#socialcounter .social_item.social_github").attr("href","https://github.com/"+_.github_user),c(s)}})}function o(){t.ajax({url:"https://graph.facebook.com/v2.8/"+_.facebook_user,dataType:"json",type:"GET",data:{access_token:_.facebook_token,fields:"fan_count"},success:function(e){var s=parseInt(e.fan_count),o=r(s);t("#socialcounter .social_item.social_facebook .count").append(o),t("#socialcounter .social_item.social_facebook").attr("href","https://facebook.com/"+_.facebook_user),c(s)}})}function a(){t.ajax({url:"https://api.instagram.com/v1/users/self/",dataType:"jsonp",type:"GET",data:{access_token:_.instagram_token},success:function(e){var s=parseInt(e.data.counts.followed_by),o=r(s);t("#socialcounter .social_item.social_instagram .count").append(o),t("#socialcounter .social_item.social_instagram").attr("href","https://instagram.com/"+_.instagram_user),c(s)}})}function u(){t.ajax({url:"https://www.googleapis.com/plus/v1/people/"+_.google_plus_id,type:"GET",dataType:"json",data:{key:_.google_plus_key},success:function(e){var s=parseInt(e.circledByCount),o=r(s);t("#socialcounter .social_item.social_google-plus .count").append(o),t("#socialcounter .social_item.social_google-plus").attr("href","https://plus.google.com/"+_.google_plus_id),c(s)}})}function n(){t.ajax({url:"https://www.googleapis.com/youtube/v3/channels",dataType:"jsonp",type:"GET",data:{part:"statistics",forUsername:_.youtube_user,key:_.youtube_key},success:function(e){var s=parseInt(e.items[0].statistics.subscriberCount),o=r(s);t("#socialcounter .social_item.social_youtube .count").append(o),t("#socialcounter .social_item.social_youtube").attr("href","https://youtube.com/"+_.youtube_user),c(s)}})}function i(){t.ajax({url:"http://juanvargas.net/SocialCounters/twitter/index.php",dataType:"json",type:"GET",data:{user:_.twitter_user},success:function(e){var s=parseInt(e.followers);t("#socialcounter .social_item.social_twitter .count").append(s).digits(),t("#socialcounter .social_item.social_twitter").attr("href","https://twitter.com/"+_.twitter_user),c(s)}})}function r(t){return t>999?(t/1e3).toFixed(1)+"k":t}function c(e){l+=e,t("#total").html(l).digits(),t("#total_k").html(r(l))}function p(){t("#socialcounter .social_item").attr("target","_blank")}var _=t.extend({twitter_user:"",facebook_user:"",facebook_token:"",instagram_user:"",instagram_token:"",google_plus_id:"",google_plus_key:"",youtube_user:"",youtube_key:"",github_user:""},e);t.fn.digits=function(){return this.each(function(){t(this).text(t(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))})};var l=0;p(),""!=_.twitter_user&&i(),""!=_.facebook_user&&""!=_.facebook_token&&o(),""!=_.instagram_user&&""!=_.instagram_token&&a(),""!=_.google_plus_id&&""!=_.google_plus_key&&u(),""!=_.youtube_user&&""!=_.youtube_key&&n(),""!=_.github_user&&s()}}(jQuery);
