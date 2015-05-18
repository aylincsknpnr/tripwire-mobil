//storage file list 
function listContents(storagename) {
  console.log("app lunch");
	//Clear up the list first
	$('#results').html("");
	var files = navigator.getDeviceStorage(storagename);
	var cursor = files.enumerate();
		cursor.onsuccess = function () {
			var file = this.result;
			if (file != null) {
				//file name add checkbox
				$("<label><p><input type='checkbox' class='sec' name='file[]' value='" + file.name + "'/>" + file.name + "</p></label>").appendTo('#izle');
				$("<label><p><input type='checkbox' class='sec' name='file[]' value='" + file.name + "'/>" + file.name + "</p></label>").appendTo('#ilkçalış');
					$("<label><p><input type='checkbox' class='sec' name='file[]' value='" + file.name + "'/>" + file.name + "</p></label>").appendTo('#sistemkontrol');
				var res=$("#results").html();
		/*var ifrm = document.getElementById('content');
	ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
	ifrm.document.open();
	ifrm.document.write(res);
	ifrm.document.close();*/			
				//.appendTo('#content');	
				this.done = false;
			}
			else {
				//save button 
			
				$('<p><input type="button" class="btn3 btn-primary" value="Tümünü seç" /></p>').appendTo('#izle');	
					$('<p><input type="button" class="btn4 btn-secondary" value="Bırak" /></p>').appendTo('#izle');
					$('<p><input type="button" class="btn btn-primary" value="Kritik Olarak Belirle" /></p>').appendTo('#izle');
				$('<p><input type="button" class="btn7 btn-primary" value="Normal Olarak Belirle" /></p>').appendTo('#izle');
				
					$('<p><input type="button" class="btn3 btn-primary" value="Tümünü seç" /></p>').appendTo('#ilkçalış');
					$('<p><input type="button" class="btn4 btn-secondary" value="Bırak" /></p>').appendTo('#ilkçalış');
				$('<p><input type="button" class="btn2 btn-secondary" value="ÇALIŞTIR" /></p>').appendTo('#ilkçalış');
				
				$('<p><input type="button" class="btn5 btn-secondary" value="RAPOR" /></p>').appendTo('#rapor');
				$('<p><input type="button" class="btn6 btn-secondary" value="Sistem Kontrol" /></p>').appendTo('#sistemkontrol');
				
				
				$('<p><input type="button" class="btn8 btn-primary" value="DEVAM" /></p>').appendTo('#kritik');
					$('<p><input type="button" class="btn9 btn-primary" value="DEVAM" /></p>').appendTo('#normal');
					$('<p><input type="button" class="btn10 btn-primary" value="IPTAL" /></p>').appendTo('#kritik');
					$('<p><input type="button" class="btn11 btn-primary" value="IPTAL" /></p>').appendTo('#normal');
				
				
				
				this.done = true;
			}
			if (!this.done) {
				this.continue();
			}
		}
}

//listed files stored on sdcard
$(document).ready(function(){
	
//read("yeni8.txt");
listContents('sdcard');
	//page 
var content = $('.content'),
    loader = $('.loader');
content.hide();
$('.menu li a').on('click', function(e){
    var self = $(this);
    setTimeout(function(){
        content.hide().filter(self.attr('href')).fadeIn();
    }, 2000);
    loader.fadeIn(1000).delay(1000).fadeOut(1000);
    e.preventDefault();
});

	$('.menu2 li a').on('click', function(e){
    var self = $(this);
    setTimeout(function(){
        content.hide().filter(self.attr('href')).fadeIn();
    }, 2000);
    loader.fadeIn(1000).delay(1000).fadeOut(1000);
    e.preventDefault();
});
	
	$('.menu3 li a').on('click', function(e){
    var self = $(this);
    setTimeout(function(){
        content.hide().filter(self.attr('href')).fadeIn();
    }, 2000);
    loader.fadeIn(1000).delay(1000).fadeOut(1000);
    e.preventDefault();
});

});

//Retrieving current date time information
Date.prototype.yyyymmdd = function() {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
	var dd  = this.getDate().toString();
	var h = this.getHours().toString();
	var m = this.getMinutes().toString();
	var s = this.getSeconds().toString();
	return yyyy + "." + (mm[1]?mm:"0"+mm[0]) + "." + (dd[1]?dd:"0"+dd[0]) + "-" + (h[1]?h:"0"+h[0]) +"." + (m[1]?m:"0"+m[0]) +"." + (s[1]?s:"0"+s[0]); 
};
d = new Date();
alert( d.yyyymmdd() );

var arr=[];
var arr2=[];
var arr3=[];
var arr4=[];
var ozet;
var returnvalue;
var arrstring;
var arrstring2;


//izlenecek dizinler
//kritik belirleme
$('input.btn').live('click', function() {
	var kritikdizi = [];
	$('input.sec:checked').each(function() {
		alert($(this).val())
		kritikdizi.push($(this).val());
	});
    alert("diziboyut...>"+kritikdizi.length);
     var j=kritikdizi.length;
	    alert("filenames i..."+kritikdizi);
	   for(var i=0;i<j;i++){
			
			 	$("<label><p><input type='checkbox' class='sec' name='file[]' value='" + kritikdizi[i] + "'/>" + kritikdizi[i] + "</p></label>").appendTo('#kritik');
		 }
	
}); 
//normal belirleme 
$('input.btn7').live('click', function() {
 var normaldizi = [];
	$('input.sec:checked').each(function() {
		alert($(this).val())
		normaldizi.push($(this).val());
	});
    alert("diziboyut...>"+normaldizi.length);
     var j=normaldizi.length;
	    alert("filenames i..."+normaldizi);
	   for(var i=0;i<j;i++){
			
			 	$("<label><p><input type='checkbox' class='sec' name='file[]' value='" + normaldizi[i] + "'/>" + normaldizi[i] + "</p></label>").appendTo('#normal');
		 }
}); 

//kritik devam işlemi 
$('input.btn8').live('click', function() {
	var fileNames = [];
	$('input.sec:checked').each(function() {
		alert($(this).val())
		//creating files in sdcard
		$('#results').html("start")
		fileNames.push($(this).val());
	});
	//is printed on the selected files in the file
	var fileString = fileNames.join("\n");
	var file = new Blob([fileString], {type: "text/plain"});
	//files named with the time information
	var sdcard = navigator.getDeviceStorage("sdcard");
	var request = sdcard.addNamed(file, d.yyyymmdd()+"Kritik.txt");
	request.onsuccess = function () {  
		var name = $(this).result;
		$('#results2').html("yazıldı");
		console.log('File "' + name + '" successfully wrote on the sdcard storage area');  
	}
	// An error typically occur if a file with the same name already exist
	request.onerror = function () {
		$('#results2').html("hata")
		console.warn('Unable to write the file: ' + this.error);
	}
	$('#results').html("text")
});
//kritik geri dönme iptal 10

//normal devam işlemi 9

//normal geridönme iptal 11

//her seçimde okuma yapması için 
$('input.sec:checked').live('change', function() {
																									console.log("checkbox click");
																										read($('input.sec:checked').val());                           
                                                    
																								}); 

$('input.sec:checked').live('change', function() {
																									console.log("checkbox click");
																										read2($('input.sec:checked').val());                           
                                                    
																								}); 

//ilk çalıştırmadaki dosyaları okuma özet alma
function read(file){
																			//	alert("çalışıyorr");
																				var sdcard = navigator.getDeviceStorage('sdcard');
																				var request = sdcard.get(file);
																	request.onsuccess = function () {
																		//alert("başarılı");

																var comefile = this.result;
																		

															file = new Blob([comefile], {type: "text/plain"});
																		
																		
																		var reader = new FileReader();
																	reader.addEventListener("loadend", function() {																												
	
						//dosya içinden satır satır okuma
						var read=this.result;
						
						reads=read.split("\n");
						//alert(reads+"reads");
						//okunanlar imzaları yazılıyor
					
					//	alert(ozet+"özet");
						var smile=comefile+" dosyanın özeti: "+$.md5(read)													
									arr.push(smile);
						 arrstring=arr.join("\n");
																					
			
				//	alert("dizi özet..."+arr[0]);
					//alert("stringarr..."+" "+arrstring+" ");
					});
					reader.readAsText(file);
						}


					request.onerror = function () {
						 alert("başarısız!")
						console.warn("Unable to get the file: ");
					} 
							
   
								
																			}

//sistem kontrolündeki dosyaları okuma özet alma
function read2(kontrol){
																			//	alert("çalışıyorr");
																				var sdcard = navigator.getDeviceStorage('sdcard');
																				var request = sdcard.get(kontrol);
																	request.onsuccess = function () {
																		//alert("başarılı");
																	var comefile = this.result;
				
																		

																		file = new Blob([comefile], {type: "text/plain"});
																		
																		
																		var reader = new FileReader();
																	reader.addEventListener("loadend", function() {																												
	
						//dosya içinden satır satır okuma
						var read=this.result;
						
						reads=read.split("\n");
					//	alert(reads+"....reads");
							var smile=comefile+" dosyanın özeti: "+$.md5(read)																
						arr2.push(smile);
						 arrstring2=arr2.join("\n");											
					
					});
					reader.readAsText(file);
						}


					request.onerror = function () {
						 alert("başarısız!")
						console.warn("Unable to get the file: ");
					} 
							
   
								
																			}




//ilk çalıştırma
$('input.btn2').live('click', function() {
	alert("tıklanınca...."+arrstring);
	var sdcard2 = navigator.getDeviceStorage("sdcard");
	var hash = new Blob([arrstring], {type: "text/plain"});
	var request = sdcard2.addNamed(hash, "imzalarss.txt");
	request.onsuccess = function () {  
		alert("yazılıyorr");
		var name = $(this).result;
		$('#results2').html("yazıldı");
		console.log('File "' + name + '" successfully wrote on the sdcard storage area');  
	}
	// An error typically occur if a file with the same name already exist
	request.onerror = function () {
		alert("yazılamıyorr");
		$('#results2').html("hata")
		console.warn('Unable to write the file: ' + this.error);
	}
});


//complete checked 
$('input.btn3').live('click', function() {
  console.log("buton click");
	$("input:checkbox").each(function(){
			
				this.checked = true;
			
			});
	
});

//not checked
$('input.btn4').live('click', function() {
  console.log("buton click");
	$("input:checkbox").each(function(){
			
				this.checked = false;
			
			});
	
});


//rapor için
	$('input.btn5').live('click', function() {
		

	
 
	
});

//sistem kontrol için
$('input.btn6').live('click', function() {
	alert("tıklanınca...."+arrstring2);
	var sdcard3 = navigator.getDeviceStorage("sdcard");
	var hash = new Blob([arrstring2], {type: "text/plain"});
	//var request = sdcard3.addNamed(hash, d.yyyymmdd()+".imza.txt");
	var request = sdcard3.addNamed(hash, "ikinciimzalar.txt");
	request.onsuccess = function () {  
		alert("yazılıyorr");
		var name = $(this).result;
		$('#results2').html("yazıldı");
		console.log('File "' + name + '" successfully wrote on the sdcard storage area');  
	}
	// An error typically occur if a file with the same name already exist
	request.onerror = function () {
		alert("yazılamıyorr");
		$('#results2').html("hata")
		console.warn('Unable to write the file: ' + this.error);
	}
});






































