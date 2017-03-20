$(document).ready(function(){
	var $mainOutput = $('#output');
	var $subOutput = $('#output2');
	
	var clearOutput = function() {
        $mainOutput.html('');
        $subOutput.html('');
    };
	
	$('.btn-clear').click(function(){
        $mainOutput.html('0');
        $subOutput.html('');
	})
	
	$('.nums').click(function() {
		if ($mainOutput.html() == '0') {
            clearOutput();
        }
		if (($subOutput.html().length !=0) && (('+-*/').indexOf($subOutput.html().slice(-1)) !=-1)) {
			$mainOutput.html($(this).val());
			$subOutput.append($(this).val());
		}else{
			$mainOutput.append($(this).val());
			$subOutput.append($(this).val());
		}
	})
	
	$('.brackets').click(function(){
		if ($mainOutput.html() == '0') {
            clearOutput();
        }
		$subOutput.append($(this).val());
	})
	
	$('.btn-operate').click(function() {
		$subOutput.append($(this).val());
	})
	
	$('.btn-equal').click(function(){
		$mainOutput.html(eval($subOutput.html()));
	})
}
)