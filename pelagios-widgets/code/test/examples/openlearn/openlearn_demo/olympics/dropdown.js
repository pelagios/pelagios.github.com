function initSelect(formId,targetWindow){select_formid=formId,select_targetwindow=targetWindow;var theSelect=document.getElementById(select_formid+"_jump");return theSelect.changed=!1,theSelect.initValue=theSelect.value,theSelect.onchange=selectChanged,theSelect.onkeydown=selectKeyed,theSelect.onclick=selectClicked,!0}function selectChanged(theElement){var theSelect;return theElement&&theElement.value?theSelect=theElement:theSelect=this,theSelect.changed?(select_targetwindow.location=document.getElementById(select_formid).jump.options[document.getElementById(select_formid).jump.selectedIndex].value,!0):!1}function selectClicked(){this.changed=!0}function selectKeyed(e){var theEvent,keyCodeTab="9",keyCodeEnter="13",keyCodeEsc="27";return e?theEvent=e:theEvent=event,theEvent.keyCode!=keyCodeEnter&&theEvent.keyCode!=keyCodeTab||this.value==this.initValue?theEvent.keyCode==keyCodeEsc?this.value=this.initValue:this.changed=!1:(this.changed=!0,selectChanged(this)),!0}var select_formid,select_targetwindow