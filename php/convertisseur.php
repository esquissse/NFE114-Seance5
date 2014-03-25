<?php
  
  if ( isset ($_POST['francs']) && $_POST['francs'].length > 0) {
    echo "euros=".$_POST['francs']/6.55957;
  }
  if ( isset ($_POST['euros']) && $_POST['euros'].length > 0) {
    echo "francs=".$_POST['euros']*6.55957;
  }
?> 