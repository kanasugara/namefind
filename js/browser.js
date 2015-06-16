var PowerOrOccupation = '<option selected="selected" value=""> Choose Theme </option><option value="1_1">Power and Royalty</option><option value="1_2">Powerlessness</option><option value="1_3">Feudal Occupations</option><option value="1_4">Numbers (order of succession)</option><option value="1_5">Song, Music and the Arts</option><option value="1_6">Magical Powers</option>';
var JourneysAndPlaces = '<option selected="selected" value=""> Choose Theme </option><option value="2_1">Roads and Paths</option><option value="2_2">Peopled Places</option><option value="2_3">Wilderness</option><option value="2_4">Fresh Water</option><option value="2_5">The Sea</option>';
var AppearanceAndBeauty = '<option selected="selected" value=""> Choose Theme </option><option value="3_1">Beauty</option><option value="3_2">Colours</option><option value="3_3">Eyes</option><option value="3_4">Hair Shades</option><option value="3_5">Shape and Body</option><option value="3_6">Gems and Metals</option>';
var RomanticAndSpiritual = '<option selected="selected" value=""> Choose Theme </option><option value="4_1">Lone Elves</option><option value="4_2">Spirituality</option><option value="4_3">Romance</option><option value="4_4">Wisdom</option>';
var HealthAndAge = '<option selected="selected" value=""> Choose Theme </option><option value="5_1">Health</option><option value="5_2">Age</option><option value="5_3">Cleanliness</option>';
var SeasonsAndSky = '<option selected="selected" value=""> Choose Theme </option><option value="6_1">Winter</option><option value="6_2">Summer</option><option value="6_3">Weather</option><option value="6_4">Celestial Bodies</option>';
var LightOrDark = '<option selected="selected" value=""> Choose Theme </option><option value="7_1">Good</option><option value="7_2">Evil</option><option value="7_3">Dark</option><option value="7_4">Light</option>';
var Personality = '<option selected="selected" value=""> Choose Theme </option><option value="8_1">Insults and Humour</option><option value="8_2">Positive Emotions</option><option value="8_3">Negative Emotions</option><option value="8_4">Positive Personality</option><option value="8_5">Negative Personality</option>';
var Elements = '<option selected="selected" value=""> Choose Theme </option><option value="9_1">Earth</option><option value="9_2">Air</option><option value="9_3">Fire</option><option value="9_4">Water</option>';
var Nature = '<option selected="selected" value=""> Choose Theme </option><option value="10_1">Animals</option><option value="10_2">Birds</option><option value="10_3">Plants and Trees</option>';
var Battle = '<option selected="selected" value=""> Choose Theme </option><option value="11_1">Warriors</option><option value="11_2">Wars and Battles</option><option value="11_3">Blood</option><option value="11_4">Heroes</option><option value="11_5">Antiheroes</option>';
var Default = '<option selected="selected" value=""> Choose Theme </option>';
$(document).ready(function(){
    $("select#prime_theme").on('change',function(){
        if($(this).val()==1){
            $("select#sub_theme").html(PowerOrOccupation);
        }else if($(this).val()==2){
            $("select#sub_theme").html(JourneysAndPlaces);
        }else if($(this).val()==3){
            $("select#sub_theme").html(AppearanceAndBeauty);
        }else if($(this).val()==4){
            $("select#sub_theme").html(RomanticAndSpiritual);
        }else if($(this).val()==5){
            $("select#sub_theme").html(HealthAndAge);
        }else if($(this).val()==6){
            $("select#sub_theme").html(SeasonsAndSky);
        }else if($(this).val()==7){
            $("select#sub_theme").html(LightOrDark);
        }else if($(this).val()==8){
            $("select#sub_theme").html(Personality);
        }else if($(this).val()==9){
            $("select#sub_theme").html(Elements);
        }else if($(this).val()==10){
            $("select#sub_theme").html(Nature);
        }else if($(this).val()==11){
            $("select#sub_theme").html(Battle);
        }else if($(this).val()==0){
            $("select#sub_theme").html(Default);
        }
    });
});