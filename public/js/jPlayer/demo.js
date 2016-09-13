
PlayerProto = function(){}; 

PlayerProto.prototype.draw = function(){
   myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jplayer_N",
    cssSelectorAncestor: "#jp_container_N"
  }, [
    
  ], {
    playlistOptions: {
      enableRemoveControls: true,
      autoPlay: true
    },
    swfPath: "js/jPlayer",
    supplied: "webmv, ogv, m4v, oga, mp3",
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: false
  });
  
  $(document).on($.jPlayer.event.pause, myPlaylist.cssSelector.jPlayer,  function(){
    $('.musicbar').removeClass('animate');
    $('.jp-play-me').removeClass('active');
    $('.jp-play-me').parent('li').removeClass('active');
  });

  $(document).on($.jPlayer.event.play, myPlaylist.cssSelector.jPlayer,  function(e){
    $('.musicbar').addClass('animate');
  });

  $(document).on('click', '.jp-play-me', function(e){
    e && e.preventDefault();
    var $this = $(e.target);
    if (!$this.is('a')) $this = $this.closest('a');

    $('.jp-play-me').not($this).removeClass('active');
    $('.jp-play-me').parent('li').not($this.parent('li')).removeClass('active');

    $this.toggleClass('active');
    $this.parent('li').toggleClass('active');
    if( !$this.hasClass('active') ){
      myPlaylist.pause();
    }else{
      var i = Math.floor(Math.random() * (1 + 7 - 1));
      myPlaylist.play(i);
    }
    
  });


  // video
  $("#jplayer_1").jPlayer({
    swfPath: "js",
    supplied: "webmv, ogv, m4v",
    size: {
      width: "100%",
      height: "auto",
      cssClass: "jp-video-360p"
    },
    globalVolume: true,
    smoothPlayBar: true,
    keyEnabled: true
  });
}; 


PlayerProto.prototype.addList = function(item){
  console.log("Adicionando mídia a playlist"); 
  myPlaylist.add(item); 
}; 


PlayerProto.prototype.play = function(item){
  if( typeof item != 'undefined')
    $('#jplayer_N').jPlayer("setMedia",item).jPlayer('play'); 
  else
    $('#jplayer_N').jPlayer('play'); 
}; 


PlayerProto.prototype.onPlay = function(foo){
    $(document).off().on($.jPlayer.event.play, myPlaylist.cssSelector.jPlayer,  function(e){
    $('.musicbar').addClass('animate');
    foo(e); 
  });
}; 


PlayerProto.prototype.onPause = function(foo){
  $(document).on($.jPlayer.event.pause, myPlaylist.cssSelector.jPlayer,  function(){
    $('.musicbar').removeClass('animate');
    $('.jp-play-me').removeClass('active');
    $('.jp-play-me').parent('li').removeClass('active');
    foo(e); 
  });
}; 


window.Player = new PlayerProto(); 