$(document).ready(function(){
    
    
    $("input[name='on']").click(function(){        
        $("input[name='screen']").val("");        
    });
    
    $("input[name='sum']").click(function(){        
        var suma = eval(calculator.screen.value);
        $("input[name='screen']").val(suma);
    });
    
    $("input[name='element']").click(function(){        
        $("input[name='screen']").val();        
    });
        
    
    document.addEventListener('keyup', function(e){
        var liczba = e.key;         
        
        switch(liczba){
            case "1": {
                console.log("1");
                $("input[name='screen']").val("1");        
                break;
            }
            case "2": {                
                $("input[name='screen']").val("2");        
                break;
            }
            case "3": {                
                $("input[name='screen']").val("3");        
                break;
            }
            case "4": {                
                $("input[name='screen']").val("4");        
                break;
            }
            case "5": {                
                $("input[name='screen']").val("5");        
                break;
            }
            case "6": {                
                $("input[name='screen']").val("6");        
                break;
            }
            case "7": {                
                $("input[name='screen']").val("7");        
                break;
            }
            case "8": {                
                $("input[name='screen']").val("8");        
                break;
            }
            case "9": {                
                $("input[name='screen']").val("9");        
                break;
            }
            case "0": {                
                $("input[name='screen']").val("0");        
                break;
            }
            case "+": {                
                $("input[name='screen']").val("+");        
                break;
            }
            case "-": {                
                $("input[name='screen']").val("-");        
                break;
            }
            case "/": {                
                $("input[name='screen']").val("/");        
                break;
            }
            default: {
                
            }
        }
    });
    
});