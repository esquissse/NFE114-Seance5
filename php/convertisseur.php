<?php
  
  if ( isset ($_POST['francs']) && strlen($_POST['francs']) > 0) {
    echo "euros=".$_POST['francs']/6.55957;
  }
  if ( isset ($_POST['euros']) && strlen($_POST['euros']) > 0) {
    echo "francs=".$_POST['euros']*6.55957;
  }
?> 
