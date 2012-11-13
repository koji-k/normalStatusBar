var settings = {};
settings.sbHeight = 20;
settings.sbHeightPx = settings.sbHeight + "px";
settings.statusBarObject = null;

// ステータスバー生成
function createStatusBarObject() {
	var $jqObj = $("<div/>");
	$jqObj.css('text-align', 'center');
	$jqObj.css('padding', '0px');
	$jqObj.css('height', settings.sbHeightPx);
	$jqObj.css('background-color', '#E6E6FA');
	$jqObj.css('position', 'absolute');
	$jqObj.css('left', '0px');
	return $jqObj;
}

// テキスト部分オブジェクト生成
function createTextObject(url) {
	var $textObj = $("<p/>");
	$textObj.css('margin', '0px 5px 0px 5px');
	$textObj.css('padding', '0px 0px 0px 0px');
	$textObj.css('line-height', settings.sbHeightPx);
	$textObj.css('color', 'black');
	$textObj.css('font-size', '9pt');
	$textObj.css('font-family', 'Lucida Grande');
	$textObj.css('font-weight', 'normal');
	$textObj.text(url);
	return $textObj;
}

function mouseOn(url){
	var maxLength = 50;
	if (url.length > maxLength) {
		url = url.substring(0, maxLength-1) + "...";
	}

	// 表示位置
	var placeY = $(window).scrollTop() + ($(window).height() - settings.sbHeight);
	settings.statusBarObject.css("top", (placeY+"px"));

	// ステータスバーにURLテキスト追加＆表示
	var text = createTextObject(url);
	settings.statusBarObject.append(text);
	settings.statusBarObject.show();
}

function mouseOut() {
	settings.statusBarObject.empty();
	settings.statusBarObject.hide();
}

settings.statusBarObject = createStatusBarObject();
settings.statusBarObject.hide();
$("body").append(settings.statusBarObject);

$("a").hover(
	function () { mouseOn($(this).attr("href")); },	// マウスオーバー
	function () { mouseOut(); }	// マウスアウト
);
