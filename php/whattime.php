<?php 
date_default_timezone_set('America/Edmonton');
while(time() <= strtotime("17:00:00")) { 
	echo "Is it 5:00 yet?\n"; 
	sleep(1); 
	echo "No, it's currently: ".date("G:i:s", time())."\n\n";
	sleep(1);
}
echo "Its after 5:00 now\n";
?>
