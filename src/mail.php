<?
$_POST = json_decode(file_get_contents("php://input"), true);
//header('Content-type:text/html; charset=utf-8');
if($_POST) {
	$email = stripslashes($_POST["email"]);
	$grunt = stripslashes($_POST["grunt"]);
	$phone = stripslashes($_POST["phone"]);

	$subject = 'Заказ на септик';
	$message = 'Здравствуйте, я хочу заказать у вас септик, мой грунт - '.$grunt.', перезвоните мне пожалуйста на номер: '.$phone;
	$headers = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Заказ с сайта «Септики»  <zayavka@test.vilok.net>\r\n";

	$mail = mail($email, $subject, $message, $headers);

	if($mail) {
		echo $email;
		echo "Ваша заявка успешно отправлена, мы свяжемся с вами в течении 5 минут";
	} else {
		echo $email;
		echo "Произошел сбой, ваша заявка не отправлена, позвоните по номеру +7 (####) ##-##-##";
	}
}


?>
