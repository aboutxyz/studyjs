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
		$mainOutput.append($(this).val());
		$subOutput.append($(this).val());
	})
	
	$('.btn-operate').click(function() {
		$mainOutput.append($(this).val());
		$subOutput.append($(this).val());
	})
	
	$('.btn-equal').click(function(){
		$mainOutput.html(eval($subOutput.html()));
	})
}
)