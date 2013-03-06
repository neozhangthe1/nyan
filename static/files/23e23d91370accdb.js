


    
    Douban.init_usr_donate = function(o) {
      var donateUrl = $(o).attr('href'), 
      dlgWidth = 420, 
      dlgContent = '<div class="dlg-hd"><h3>{TITLE}</h3><a href="#" class="bn-dlg-close">x</a></div><iframe id="ifm-donate" src="' + donateUrl + '" frameborder="0" width="' + dlgWidth + '" height="230" scrolling="no">', 
      handleClick = function(e){
        e.preventDefault();
        show_dialog(dlgContent.replace('{TITLE}', '送小豆给' + this.getAttribute('data-user')), dlgWidth);
        $('#dialog .bn-dlg-close').click(handleCloseClick);
        return false;
      },
      handleCloseClick = function(e){
        e.preventDefault();
        close_dialog();
      };
      $(o).click(handleClick);
    };


Do(function(){
  
  var noti_ids = {"num": 0};
  var noti_api = 'http://www.douban.com/j/notification/read_notis';

  // 不再提醒
  Douban.init_delete_reply_notify=function(b){var a=function(g){g.preventDefault();var c=$(g.target);var h=c[0].href.split("#")[1];$.get("/j/accounts/remove_notify?id="+h);var d=c.closest(".item-req");if($.contains($(".top-nav-reminder")[0],d[0])){d=d.parent();var f=d.siblings().length;d.fadeOut(function(){d.remove()});if(f===0){d.closest(".bd").find(".no-new-notis").show()}}else{d.fadeOut()}};if(b.type==="click"){a(b)}else{$(b).click(a)}};
  Douban.init_discard_notify=function(b){var a=function(i){i.preventDefault();var c="/j/notification/discard";var f=$(i.target);var d=f[0].name;$.post_withck(c,{id:d},function(e){},"json");var g=f.closest(".item-req");if($.contains($(".top-nav-reminder")[0],g[0])){g=g.parent();var h=g.siblings().length;g.fadeOut(function(){g.remove()});if(h===0){g.closest(".bd").find(".no-new-notis").show()}}else{g.fadeOut()}};if(b.type==="click"){a(b)}else{$(b).click(a)}};
  if (window.load_event_monitor) {
    load_event_monitor($('#db-global-nav'));
  }
  (function(b){var e=document;var a=[];var d=function(h,f,j,p,g){var q=g.createElement("form");var l,r,m,o;var n=function(i,s){var k=g.createElement("input");k.type="hidden";k.name=i;k.value=s;return k};q.target=p;q.action=h;q.method=f;for(l in j){if(j.hasOwnProperty(l)){r=j[l];if(typeof r==="object"&&Object.prototype.toString.call(r).search(/array/i)){m=r.length;while(m--){o=n(l,r[m]);q.appendChild(o)}}o=n(l,r);q.appendChild(o)}}return q};var c=function(){a.push(0);return"_xpost_iframe_"+a.length};b.xPost=function(h,j){var k=c();var i;var g;var f;if("ActiveXObject" in window){f=new ActiveXObject("htmlfile");f.open();f.write('<html><body><iframe id="xpost-proxy-iframe'+k+'"></iframe></body></html>');f.close();g=f.getElementById("xpost-proxy-iframe"+k);g.contentWindow.name=k;i=d(h,"post",j,k,f);f.body.appendChild(i);f=f.body}else{g=e.createElement("iframe");g.width=0;g.name=k;g.height=0;g.style.position="absolute";g.style.visibility="hidden";g.src="javascript:false;";f=e.body;f.appendChild(g);i=d(h,"post",j,k,e);f.appendChild(i)}g.onload=function(){};i.submit()}})(jQuery);var popup;var nav=$("#db-global-nav");var more=nav.find(".bn-more");nav.delegate(".bn-more, .top-nav-reminder .lnk-remind","click",function(f){f.preventDefault();var c=$(this);var d=c.parent();if(popup){popup.parent().removeClass("more-active");if($.contains(d[0],popup[0])){popup=null;return false}}d.addClass("more-active");popup=d.find(".more-items");if(c.hasClass("lnk-remind")&&noti_ids.num){var a=nav.find(".top-nav-reminder .num");var b=(a.find("span").text()|0)-noti_ids.num;b=b<=0?0:b;if(b===0){a.hide()}else{a.find("span").text(b)}noti_ids.num=0;$.xPost(noti_api,$.extend({ck:get_cookie("ck")},noti_ids))}return false});$(document).click(function(a){if($(a.target).closest(".more-items").length){return}if(popup){popup.parent().removeClass("more-active");popup=null}});
});

Do(function(){
  var nav = $('#db-nav-sns');
  var inp=$("#inp-query"),label=inp.closest(".nav-search").find("label");if(inp.val()!==""){label.hide()}inp.parent().click(function(){inp.focus();label.hide()}).end().focusin(function(){label.hide()}).focusout(function(){if($.trim(this.value)===""){label.show()}else{label.hide()}}).keydown(function(){label.hide()});nav.find(".lnk-more, .lnk-account").click(function(b){b.preventDefault();var d,a=$(this),c=a.hasClass("lnk-more")?$("#db-productions"):$("#db-usr-setting");if(!c.data("init")){d=a.offset();c.css({"margin-left":(d.left-$(window).width()/2-c.width()+a.width()+parseInt(a.css("padding-right"),10))+"px",left:"50%",top:d.top+a.height()+"px"});c.data("init",1);c.hide();$("body").click(function(g){var f=$(g.target);if(f.hasClass("lnk-more")||f.hasClass("lnk-account")||f.closest("#db-usr-setting").length||f.closest("#db-productions").length){return}c.hide()})}if(c.css("display")==="none"){$(".dropdown").hide();c.show()}else{$(".dropdown").hide()}});
});

var tagsug_src = "http://img3.douban.com/js/lib/packed_tagsug4090678669.js";
window.Do=window.Do||function(a){typeof a=="function"&&setTimeout(a,0)};Do.add_js=function add_js(b){var a=document.createElement("script");a.src=b;document.getElementsByTagName("head")[0].appendChild(a)};Do.add_css=function add_css(c,b){var a=document.createElement("link");a.rel="stylesheet";a.href=c;document.getElementsByTagName("head")[0].appendChild(a)};Do.check_js=function check_js(a,c){var b=a();if(b){c(b)}else{setTimeout(function(){check_js(a,c)},33)}};Do(function(){var a=$("#inp-query,#search_text");a.one("focus",function(){Do.add_js(tagsug_src);Do.check_js(function(){return $.fn.tagsug&&window.Mustache},function(){a.tagsug({max:8,useUid:true,tips:"@某人，直达其个人主页"});var b=a._tagsug_api[0];b.on("choose",function(d,c){window.location="/people/"+c+"/"});a.tagsug({wordLimit:30,url:"",max:null,haltLink:false,customData:{cls:"sug-quick-search",items:[{name_cn:"图书",url:"http://book.douban.com/subject_search?cat=1003&search_text="},{name_cn:"电影",url:"http://movie.douban.com/subject_search?cat=1002&search_text="},{name_cn:"音乐",url:"http://movie.douban.com/subject_search?cat=1001&search_text="},{name_cn:"同城活动",url:"http://www.douban.com/event/search?search_text="}]},listTmpl:'<ul class="{{cls}}">{{#items}}<li><a href="{{url}}{{q}}">搜索 <b>{{q}}</b> 的{{name_cn}}</a></li>{{/items}}</ul>',leadChar:"%",tips:null})})})});

$(function(){
    var intro_form = $('form[name="edit_intro"]')[0];
    var intro_error = $('#intro_error');
    var intro_disp = $('#intro_display');
    var intro_action = $('#intro_disp_act');
    var intro_action_a = $('#intro_disp_act a');
    var intro_textarea = $('textarea[name="intro"]');
    var intro_submit = $('#intro_submit');
    var intro_cancel = $('#intro_cancel');

    var introShow = function(t){
            if(t != undefined){
                intro_disp.html(t);
                if (intro_disp.text() === ''){
                    intro_action_a.text('添加自我介绍');
                }else{
                    intro_action_a.text('编辑');
                };
            }
            $(intro_form).hide();
            intro_disp.show();
            intro_action.show();
            intro_error.css('display', 'none');
        }

    var myEnableForm = function(){
        $(intro_form).attr('disabled', 0);
        $(intro_form).children('input,textarea').attr('disabled', 0);
        intro_textarea.focus();
    }
    
    intro_textarea.elastic();
    
    $(intro_form).submit(function(e){
        e.preventDefault();
        remote_submit_json(intro_form, function(r){
            if (r.r === '0') {
                introShow( r.intro );
                intro_error.css('display', 'none');
                intro_disp.css('font-style', 'normal');
            } else {
                intro_error.text(r.error);
                intro_error.css('display', 'inline');
                myEnableForm();
            }
        });
        return false;
    });
    
    intro_cancel.click(function(e){
        e.preventDefault();
        $(intro_form).hide();
        intro_disp.show();
        intro_action.show();
        intro_error.css('display', 'none');
    });

    intro_action_a.click(function(e){
        e.preventDefault();
        intro_disp.hide();
        intro_action.hide();
        $(intro_form).show();

        myEnableForm();
        intro_textarea.elastic();
    });

});
