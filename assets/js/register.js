// var validate = new Validator("oprec");

// validate.addValidation('nama','req','Please enter a valid name');
// validate.addValidation('nrp','req','Please enter your NRP');
// validate.addValidation('nrp','maxlen=10','Invalid NRP');
// validate.addValidation('nrp','minlen=10','Invalid NRP');
// validate.addValidation('pil1','dontselect=00','Please choose first division');
// validate.addValidation('pil2','dontselect=00','Please choose second division');
// validate.addValidation('pil3','dontselect=00','Please choose third division');
// validate.addValidation('file','req_file','Please upload your reuired file');
// validate.addValidation('file','file_extn=zip','Please input a valid ZIP file');

$(document).ready(function(){
	// var data = $('#oprec').serialize();
	$('button#submit').click(function(e){
		
		e.preventDefault();
		var formData = new FormData($('#oprec')[0]);
		// $.post("php/oprec_staff.php", formData),function(res){
		// 	alert(res);
		// }
		$.ajax({
			url:'php/oprec_staff.php',
			type:'POST',
			data:formData,
			async:false,
			cache:false,
			contentType:false,
			enctype:'multipart/form-data',
			processData:false,
		}).done(function(res){
			alert(res);
			
		}).fail(function(res) {
		   alert(res);
		});
		return false;
	});
});
