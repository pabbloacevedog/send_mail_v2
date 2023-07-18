// App Imports
import models from '../../models/index.js'
const nodemailer = require("nodemailer");
// Get users by ID
export async function search_by_user(parentValue, { user }) {
	return await models.User.findOne({ where: { user } })
}
export async function search_by_email(parentValue, { email }) {
	return await models.User.findOne({ where: { email } })
}
export async function search_by_id(parentValue, { user_id },) {
	return await models.User.findOne({ where: { user_id } })
}
// Get all users
export async function all_users() {
	return await models.User.findAll()
}

export async function check_user(parentValue, { user }) {
	var exists = false
	var user = await models.User.findOne({ where: { user } })
	if (user) {
		exists = true
	}
	return await { exists }
}
// Delete use
// export async function remove_user({user_id}) {
// 	return await models.User.destroy({where: {user_id}})
// }

async function create(
	dni,
	name,
	user,
	password,
	email,
	phone,
	address,
	city,
	country,
	url_img,
	url_img_history,
	instagram,
	facebook,
	whatsapp,
	realtive,
	relationship,
	designated_wallet
) {
	var create = false;
	var error = "";
	await models.Mail.create({
		dni,
		name,
		user,
		password,
		email,
		phone,
		address,
		city,
		country,
		url_img,
		url_img_history,
		sent: 1,
		instagram,
		facebook,
		whatsapp,
		realtive,
		relationship,
		date_sent: Date.now(),
		designated_wallet
	})
		.then((Mail) => {
			create = true;
		})
		.catch((err) => {
			console.log(err);
			error = err;
		});
	console.log("fin");
	if (create) {
		return { create };
	} else {
		throw new Error(
			`Error sending mail ` + error
		);
	}
}
export async function sendMail(
	parentValue,
	{
		dni,
		name,
		user,
		password,
		email,
		phone,
		address,
		city,
		country,
		url_img,
		url_img_history,
		instagram,
		facebook,
		whatsapp,
		realtive,
		relationship,
		designated_wallet
	},
	context
) {
	// console.log(`Se ha enviado la clave ${passphrase} al email ${email}.`);
	if (
		await create(
			dni,
			name,
			user,
			password,
			email,
			phone,
			address,
			city,
			country,
			url_img,
			url_img_history,
			instagram,
			facebook,
			whatsapp,
			realtive,
			relationship,
			designated_wallet
		)
	) {
		let testAccount = await nodemailer.createTestAccount();
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: testAccount.user, // generated ethereal user
				pass: testAccount.pass, // generated ethereal password
			},
		});
		let info = await transporter.sendMail({
			from: "test@test.com", // sender address
			to: "test@test.com", // list of receivers
			subject: "Advice!", // Subject line
			text: "text", // plain text body
			html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="bodycontainer">
        <table
        width="100%"
        cellpadding="12"
        cellspacing="0"
        border="0"
        >
        <tr>
            <td>
            <div style="overflow: hidden">
                <font size="-1"
                ><u></u>
                <div
                    style="
                    margin: 0;
                    background: #f3f3f3 !important;
                    box-sizing: border-box;
                    color: #0a0a0a;
                    font-family: Helvetica, Arial, sans-serif;
                    font-size: 16px;
                    font-weight: normal;
                    line-height: 1.3;
                    margin: 0;
                    min-width: 100%;
                    padding: 0;
                    padding-bottom: 0;
                    padding-left: 0;
                    padding-right: 0;
                    padding-top: 0;
                    text-align: left;
                    width: 100% !important;
                    "
                >
                    <span
                    style="
                        color: #f3f3f3;
                        display: none !important;
                        font-size: 1px;
                        line-height: 1px;
                        max-height: 0px;
                        max-width: 0px;
                        opacity: 0;
                        overflow: hidden;
                    "
                    ></span>
                    <table
                    style="
                        margin: 0;
                        background: #f3f3f3 !important;
                        border-collapse: collapse;
                        border-spacing: 0;
                        color: #0a0a0a;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 16px;
                        font-weight: normal;
                        height: 100%;
                        line-height: 1.3;
                        margin: 0;
                        padding-bottom: 0;
                        padding-left: 0;
                        padding-right: 0;
                        padding-top: 0;
                        text-align: left;
                        vertical-align: top;
                        width: 100%;
                    "
                    >
                    <tbody>
                        <tr
                        style="
                            padding-bottom: 0;
                            padding-left: 0;
                            padding-right: 0;
                            padding-top: 0;
                            text-align: left;
                            vertical-align: top;
                        "
                        >
                        <td
                            align="center"
                            valign="top"
                            style="
                            margin: 0;
                            border-collapse: collapse !important;
                            color: #0a0a0a;
                            font-family: Helvetica, Arial,
                                sans-serif;
                            font-size: 16px;
                            font-weight: normal;
                            line-height: 1.3;
                            margin: 0;
                            padding-bottom: 0;
                            padding-left: 0;
                            padding-right: 0;
                            padding-top: 0;
                            text-align: left;
                            vertical-align: top;
                            word-wrap: break-word;
                            "
                        >
                            <center
                            style="
                                min-width: 600px;
                                width: 100%;
                            "
                            >
                            <table
                                align="center"
                                style="
                                margin: 0 auto;
                                background: #fefefe;
                                border-collapse: collapse;
                                border-spacing: 0;
                                float: none;
                                margin: 0 auto;
                                padding-bottom: 0;
                                padding-left: 0;
                                padding-right: 0;
                                padding-top: 0;
                                text-align: center;
                                vertical-align: top;
                                width: 600px;
                                "
                            >
                                <tbody>
                                <tr
                                    style="
                                    padding-bottom: 0;
                                    padding-left: 0;
                                    padding-right: 0;
                                    padding-top: 0;
                                    text-align: left;
                                    vertical-align: top;
                                    "
                                >
                                    <td
                                    style="
                                        margin: 0;
                                        border-collapse: collapse !important;
                                        color: #0a0a0a;
                                        font-family: Helvetica,
                                        Arial, sans-serif;
                                        font-size: 16px;
                                        font-weight: normal;
                                        line-height: 1.3;
                                        margin: 0;
                                        padding-bottom: 0;
                                        padding-left: 0;
                                        padding-right: 0;
                                        padding-top: 0;
                                        text-align: left;
                                        vertical-align: top;
                                        word-wrap: break-word;
                                    "
                                    >
                                    <table
                                        style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        display: table;
                                        padding: 0;
                                        padding-bottom: 0;
                                        padding-left: 0;
                                        padding-right: 0;
                                        padding-top: 0;
                                        text-align: left;
                                        vertical-align: top;
                                        width: 100%;
                                        "
                                    >
                                        <tbody>
                                        <tr
                                            style="
                                            padding-bottom: 0;
                                            padding-left: 0;
                                            padding-right: 0;
                                            padding-top: 0;
                                            text-align: left;
                                            vertical-align: top;
                                            "
                                        >
                                            <th
                                            style="
                                                margin: 0 auto;
                                                border-collapse: collapse !important;
                                                color: #0a0a0a;
                                                font-family: Helvetica,
                                                Arial,
                                                sans-serif;
                                                font-size: 16px;
                                                font-weight: normal;
                                                line-height: 1.3;
                                                margin: 0 auto;
                                                padding-bottom: 16px;
                                                padding-left: 0;
                                                padding-right: 0;
                                                padding-top: 0;
                                                text-align: left;
                                                vertical-align: top;
                                                width: 600px;
                                                word-wrap: break-word;
                                            "
                                            >
                                            <table
                                                style="
                                                border-collapse: collapse;
                                                border-spacing: 0;
                                                padding-bottom: 0;
                                                padding-left: 0;
                                                padding-right: 0;
                                                padding-top: 0;
                                                text-align: left;
                                                vertical-align: top;
                                                width: 100%;
                                                "
                                            >
                                                <tbody>
                                                <tr
                                                    style="
                                                    padding-bottom: 0;
                                                    padding-left: 0;
                                                    padding-right: 0;
                                                    padding-top: 0;
                                                    text-align: left;
                                                    vertical-align: top;
                                                    "
                                                >
                                                    <th
                                                    style="
                                                        margin: 0;
                                                        border-collapse: collapse !important;
                                                        color: #0a0a0a;
                                                        font-family: Helvetica,
                                                        Arial,
                                                        sans-serif;
                                                        font-size: 16px;
                                                        font-weight: normal;
                                                        line-height: 1.3;
                                                        margin: 0;
                                                        padding-bottom: 0;
                                                        padding-left: 0;
                                                        padding-right: 0;
                                                        padding-top: 0;
                                                        text-align: left;
                                                        vertical-align: top;
                                                        word-wrap: break-word;
                                                    "
                                                    >
                                                    <img
                                                        src="https://ci4.googleusercontent.com/proxy/WFcRz5IjOtvII9wkSMVcRQpHZ0s-UAmUStqVhbqDqRm8Fo4SsU-uwjQOVB5i18mqcl_qaokQrWM=s0-d-e1-ft#http://colmena.cl/mail-img/header.jpg"
                                                        style="
                                                        clear: both;
                                                        display: block;
                                                        max-width: 100%;
                                                        outline: none;
                                                        text-decoration: none;
                                                        width: auto;
                                                        "
                                                    />
                                                    </th>
                                                    <th
                                                    style="
                                                        margin: 0;
                                                        border-collapse: collapse !important;
                                                        color: #0a0a0a;
                                                        font-family: Helvetica,
                                                        Arial,
                                                        sans-serif;
                                                        font-size: 16px;
                                                        font-weight: normal;
                                                        line-height: 1.3;
                                                        margin: 0;
                                                        padding: 0 !important;
                                                        padding-bottom: 0;
                                                        padding-left: 0;
                                                        padding-right: 0;
                                                        padding-top: 0;
                                                        text-align: left;
                                                        vertical-align: top;
                                                        width: 0;
                                                        word-wrap: break-word;
                                                    "
                                                    ></th>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </th>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        display: table;
                                        padding: 0;
                                        padding-bottom: 0;
                                        padding-left: 0;
                                        padding-right: 0;
                                        padding-top: 0;
                                        text-align: left;
                                        vertical-align: top;
                                        width: 100%;
                                        "
                                    >
                                        <tbody>
                                        <tr
                                            style="
                                            padding-bottom: 0;
                                            padding-left: 0;
                                            padding-right: 0;
                                            padding-top: 0;
                                            text-align: left;
                                            vertical-align: top;
                                            "
                                        >
                                            <th
                                            style="
                                                margin: 0 auto;
                                                border-collapse: collapse !important;
                                                color: #0a0a0a;
                                                font-family: Helvetica,
                                                Arial,
                                                sans-serif;
                                                font-size: 16px;
                                                font-weight: normal;
                                                line-height: 1.3;
                                                margin: 0 auto;
                                                padding-bottom: 16px;
                                                padding-left: 0;
                                                padding-right: 0;
                                                padding-top: 0;
                                                text-align: left;
                                                vertical-align: top;
                                                width: 600px;
                                                word-wrap: break-word;
                                            "
                                            >
                                            <table
                                                style="
                                                border-collapse: collapse;
                                                border-spacing: 0;
                                                padding-bottom: 0;
                                                padding-left: 0;
                                                padding-right: 0;
                                                padding-top: 0;
                                                text-align: left;
                                                vertical-align: top;
                                                width: 100%;
                                                "
                                            >
                                                <tbody>
                                                <tr
                                                    style="
                                                    padding-bottom: 0;
                                                    padding-left: 0;
                                                    padding-right: 0;
                                                    padding-top: 0;
                                                    text-align: left;
                                                    vertical-align: top;
                                                    "
                                                >
                                                    <th
                                                    style="
                                                        margin: 0;
                                                        border-collapse: collapse !important;
                                                        color: #0a0a0a;
                                                        font-family: Helvetica,
                                                        Arial,
                                                        sans-serif;
                                                        font-size: 16px;
                                                        font-weight: normal;
                                                        line-height: 1.3;
                                                        margin: 0;
                                                        padding-bottom: 0;
                                                        padding-left: 0;
                                                        padding-right: 0;
                                                        padding-top: 0;
                                                        text-align: left;
                                                        vertical-align: top;
                                                        word-wrap: break-word;
                                                    "
                                                    >
                                                    <div
                                                        style="
                                                        display: block;
                                                        margin: 0
                                                            auto 0
                                                            auto;
                                                        max-width: 510px;
                                                        width: 90%;
                                                        "
                                                    >
                                                        <table
                                                        style="
                                                            border-collapse: collapse;
                                                            border-spacing: 0;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            width: 100%;
                                                        "
                                                        >
                                                        <tbody>
                                                            <tr
                                                            style="
                                                                padding-bottom: 0;
                                                                padding-left: 0;
                                                                padding-right: 0;
                                                                padding-top: 0;
                                                                text-align: left;
                                                                vertical-align: top;
                                                            "
                                                            ></tr>
                                                        </tbody>
                                                        </table>
                                                        <h4
                                                        style="
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            color: #1d85ce;
                                                            font-family: Trebuchet
                                                            MS;
                                                            font-size: 20px;
                                                            font-style: normal;
                                                            font-weight: normal;
                                                            line-height: 23px;
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                            word-wrap: normal;
                                                        "
                                                        >
                                                        ${name}
                                                        </h4>
														<div style="background: rgb(255, 255, 255); min-height: 100%;">
														<p>Estos son tus datos: </p>
														<p>Name: ${name}</p>
														<p>email: ${email}</p>
														<p>city: ${city}</p>
														<p>country: ${country}</p>
														<p>facebook: ${facebook}</p>
														<p>instagram: ${instagram}</p>
														<p>relative: ${relative}</p>
														<p>relationship: ${relationship}</p>
														<p>wallet: ${designated_wallet}</p>
														<p>img: ${url_img}</p>
														<p>whatsapp: ${whatsapp}</p>
														<p>password: ${password}</p>
														</div>
                                                        <table
                                                        style="
                                                            border-collapse: collapse;
                                                            border-spacing: 0;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            width: 100%;
                                                        "
                                                        >
                                                        <tbody>
                                                            <tr
                                                            style="
                                                                padding-bottom: 0;
                                                                padding-left: 0;
                                                                padding-right: 0;
                                                                padding-top: 0;
                                                                text-align: left;
                                                                vertical-align: top;
                                                            "
                                                            ></tr>
                                                        </tbody>
                                                        </table>
                                                        <p
                                                        style="
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            color: #757575;
                                                            font-family: Trebuchet
                                                            MS;
                                                            font-size: 16.5px;
                                                            font-style: normal;
                                                            font-weight: normal;
                                                            line-height: 24px;
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                        "
                                                        >
                                                        Junto
                                                        con
                                                        saludar,
                                                        informamos
                                                        que su
                                                        solicitud
                                                        de
                                                        reembolso
                                                        web N°
                                                        <strong>
														${designated_wallet}
														</strong
                                                        >
                                                        fue
                                                        recibida
                                                        exitosamente.
                                                        </p>
                                                        <table
                                                        style="
                                                            border-collapse: collapse;
                                                            border-spacing: 0;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            width: 100%;
                                                        "
                                                        >
                                                        <tbody>
                                                            <tr
                                                            style="
                                                                padding-bottom: 0;
                                                                padding-left: 0;
                                                                padding-right: 0;
                                                                padding-top: 0;
                                                                text-align: left;
                                                                vertical-align: top;
                                                            "
                                                            ></tr>
                                                        </tbody>
                                                        </table>
                                                        <p
                                                        style="
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            color: #757575;
                                                            font-family: Trebuchet
                                                            MS;
                                                            font-size: 16.5px;
                                                            font-style: normal;
                                                            font-weight: normal;
                                                            line-height: 24px;
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                        "
                                                        >
                                                        La
                                                        resolución
                                                        de su
                                                        solicitud
                                                        será
                                                        informada
                                                        en un
                                                        plazo de
                                                        máximo
                                                        <u></u>7
                                                        días
                                                        hábiles<u
                                                        ></u>
                                                        para
                                                        Prestaciones
                                                        Ambulatorias
                                                        y un
                                                        plazo de
                                                        20 días
                                                        hábiles
                                                        para
                                                        Prestaciones
                                                        Hospitalarias
                                                        y
                                                        boletas
                                                        extranjeras,
                                                        desde el
                                                        momento
                                                        de
                                                        recepción
                                                        de ésta.
                                                        </p>
                                                        <table
                                                        style="
                                                            border-collapse: collapse;
                                                            border-spacing: 0;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            width: 100%;
                                                        "
                                                        >
                                                        <tbody>
                                                            <tr
                                                            style="
                                                                padding-bottom: 0;
                                                                padding-left: 0;
                                                                padding-right: 0;
                                                                padding-top: 0;
                                                                text-align: left;
                                                                vertical-align: top;
                                                            "
                                                            ></tr>
                                                        </tbody>
                                                        </table>
                                                        <p
                                                        style="
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            color: #757575;
                                                            font-family: Trebuchet
                                                            MS;
                                                            font-size: 16.5px;
                                                            font-style: normal;
                                                            font-weight: normal;
                                                            line-height: 24px;
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                        "
                                                        >
                                                        Le
                                                        recordamos
                                                        que debe
                                                        guardar
                                                        los
                                                        documentos
                                                        originales
                                                        por un
                                                        plazo de
                                                        <strong
                                                            >30
                                                            días</strong
                                                        >, ya
                                                        que
                                                        eventualmente
                                                        pueden
                                                        ser
                                                        solicitados
                                                        por la
                                                        Isapre.
                                                        </p>
                                                        <table
                                                        style="
                                                            border-collapse: collapse;
                                                            border-spacing: 0;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            width: 100%;
                                                        "
                                                        >
                                                        <tbody>
                                                            <tr
                                                            style="
                                                                padding-bottom: 0;
                                                                padding-left: 0;
                                                                padding-right: 0;
                                                                padding-top: 0;
                                                                text-align: left;
                                                                vertical-align: top;
                                                            "
                                                            ></tr>
                                                        </tbody>
                                                        </table>
                                                        <p
                                                        style="
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            color: #757575;
                                                            font-family: Trebuchet
                                                            MS;
                                                            font-size: 16.5px;
                                                            font-style: normal;
                                                            font-weight: normal;
                                                            line-height: 24px;
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                        "
                                                        >
                                                        Puede
                                                        revisar
                                                        el
                                                        detalle
                                                        de su
                                                        reembolso
                                                        en
                                                        nuestra
                                                        Sucursal
                                                        Virtual
                                                        visitando
                                                        <strong
                                                            >Mi
                                                            Colmena</strong
                                                        >, en
                                                        <strong
                                                            >Menú
                                                            &gt;
                                                            Reembolsos
                                                            &gt;
                                                            Consultar
                                                            mis
                                                            solicitudes.</strong
                                                        >
                                                        </p>
                                                        <table
                                                        style="
                                                            border-collapse: collapse;
                                                            border-spacing: 0;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            width: 100%;
                                                        "
                                                        >
                                                        <tbody>
                                                            <tr
                                                            style="
                                                                padding-bottom: 0;
                                                                padding-left: 0;
                                                                padding-right: 0;
                                                                padding-top: 0;
                                                                text-align: left;
                                                                vertical-align: top;
                                                            "
                                                            ></tr>
                                                        </tbody>
                                                        </table>
                                                        <p
                                                        style="
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            color: #757575;
                                                            font-family: Trebuchet
                                                            MS;
                                                            font-size: 16.5px;
                                                            font-style: normal;
                                                            font-weight: normal;
                                                            line-height: 24px;
                                                            margin: 0;
                                                            margin-bottom: 10px;
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                        "
                                                        >
                                                        Atentamente,<br />
                                                        <strong
                                                            >ISAPRE
                                                            COLMENA</strong
                                                        >
                                                        </p>
                                                    </div>
                                                    </th>
                                                    <th
                                                    style="
                                                        margin: 0;
                                                        border-collapse: collapse !important;
                                                        color: #0a0a0a;
                                                        font-family: Helvetica,
                                                        Arial,
                                                        sans-serif;
                                                        font-size: 16px;
                                                        font-weight: normal;
                                                        line-height: 1.3;
                                                        margin: 0;
                                                        padding: 0 !important;
                                                        padding-bottom: 0;
                                                        padding-left: 0;
                                                        padding-right: 0;
                                                        padding-top: 0;
                                                        text-align: left;
                                                        vertical-align: top;
                                                        width: 0;
                                                        word-wrap: break-word;
                                                    "
                                                    ></th>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </th>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        display: table;
                                        padding: 0;
                                        padding-bottom: 0;
                                        padding-left: 0;
                                        padding-right: 0;
                                        padding-top: 0;
                                        text-align: left;
                                        vertical-align: top;
                                        width: 100%;
                                        "
                                    >
                                        <tbody>
                                        <tr
                                            style="
                                            padding-bottom: 0;
                                            padding-left: 0;
                                            padding-right: 0;
                                            padding-top: 0;
                                            text-align: left;
                                            vertical-align: top;
                                            "
                                        >
                                            <th
                                            style="
                                                margin: 0 auto;
                                                border-collapse: collapse !important;
                                                color: #0a0a0a;
                                                font-family: Helvetica,
                                                Arial,
                                                sans-serif;
                                                font-size: 16px;
                                                font-weight: normal;
                                                line-height: 1.3;
                                                margin: 0 auto;
                                                padding-bottom: 16px;
                                                padding-left: 0;
                                                padding-right: 0;
                                                padding-top: 0;
                                                text-align: left;
                                                vertical-align: top;
                                                width: 600px;
                                                word-wrap: break-word;
                                            "
                                            >
                                            <table
                                                style="
                                                border-collapse: collapse;
                                                border-spacing: 0;
                                                padding-bottom: 0;
                                                padding-left: 0;
                                                padding-right: 0;
                                                padding-top: 0;
                                                text-align: left;
                                                vertical-align: top;
                                                width: 100%;
                                                "
                                            >
                                                <tbody>
                                                <tr
                                                    style="
                                                    padding-bottom: 0;
                                                    padding-left: 0;
                                                    padding-right: 0;
                                                    padding-top: 0;
                                                    text-align: left;
                                                    vertical-align: top;
                                                    "
                                                >
                                                    <th
                                                    style="
                                                        margin: 0;
                                                        border-collapse: collapse !important;
                                                        color: #0a0a0a;
                                                        font-family: Helvetica,
                                                        Arial,
                                                        sans-serif;
                                                        font-size: 16px;
                                                        font-weight: normal;
                                                        line-height: 1.3;
                                                        margin: 0;
                                                        padding-bottom: 0;
                                                        padding-left: 0;
                                                        padding-right: 0;
                                                        padding-top: 0;
                                                        text-align: left;
                                                        vertical-align: top;
                                                        word-wrap: break-word;
                                                    "
                                                    >
                                                    <div
                                                        style="
                                                        display: block;
                                                        margin: 0
                                                            auto 0
                                                            auto;
                                                        max-width: 510px;
                                                        width: 90%;
                                                        "
                                                    >
                                                        <img
                                                        src="https://ci6.googleusercontent.com/proxy/lcEfhXxT3th8N5NZguogWLy2k7-W1HfxPTnQDZj-kwGpxPAllJqfDprcYtCwODOJ6jzSiMpb5KpvVmGz8Ds=s0-d-e1-ft#http://colmena.cl/mail-img/logo-colmena.png"
                                                        style="
                                                            clear: both;
                                                            display: block;
                                                            max-width: 100%;
                                                            outline: none;
                                                            text-decoration: none;
                                                            width: auto;
                                                        "
                                                        />
                                                    </div>
                                                    <table
                                                        style="
                                                        border-collapse: collapse;
                                                        border-spacing: 0;
                                                        padding-bottom: 0;
                                                        padding-left: 0;
                                                        padding-right: 0;
                                                        padding-top: 0;
                                                        text-align: left;
                                                        vertical-align: top;
                                                        width: 100%;
                                                        "
                                                    >
                                                        <tbody>
                                                        <tr
                                                            style="
                                                            padding-bottom: 0;
                                                            padding-left: 0;
                                                            padding-right: 0;
                                                            padding-top: 0;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            "
                                                        ></tr>
                                                        </tbody>
                                                    </table>
                                                    </th>
                                                    <th
                                                    style="
                                                        margin: 0;
                                                        border-collapse: collapse !important;
                                                        color: #0a0a0a;
                                                        font-family: Helvetica,
                                                        Arial,
                                                        sans-serif;
                                                        font-size: 16px;
                                                        font-weight: normal;
                                                        line-height: 1.3;
                                                        margin: 0;
                                                        padding: 0 !important;
                                                        padding-bottom: 0;
                                                        padding-left: 0;
                                                        padding-right: 0;
                                                        padding-top: 0;
                                                        text-align: left;
                                                        vertical-align: top;
                                                        width: 0;
                                                        word-wrap: break-word;
                                                    "
                                                    ></th>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </th>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </center>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <div
                    style="
                        display: none;
                        white-space: nowrap;
                        font: 15px courier;
                        line-height: 0;
                    "
                    ></div>
                    <br /><font color="#FFCC00"
                    >______________________________<wbr />______________________________<wbr />______________________________<wbr />__________
                    </font>
                    <p>
                    <font color="#0000CC"
                        >CONFIDENCIALIDAD: La informacion
                        contenida en este mensaje y/o en los
                        archivos adjuntos es de caracter
                        confidencial o privilegiada y esta
                        destinada al uso exclusivo del emisor y/o
                        de la persona o entidad a quien va
                        dirigida. Si usted no es el destinatario,
                        cualquier almacenamiento, divulgacion,
                        distribucion o copia de esta informacion
                        esta estrictamente prohibido y sancionado
                        por la ley. Si recibio este mensaje por
                        error, por favor informenos inmediatamente
                        respondiendo este mismo mensaje y borre
                        este y todos los archivos adjuntos.
                        Gracias.
                    </font>
                    </p>
                    <p>
                    <font color="#009900"
                        ><strong
                        >Por favor, no imprimas este e-mail si
                        realmente no lo necesitas... Conservar
                        el medio ambiente es nuestra tarea...
                        </strong></font
                    ><br />
                    </p>
                    ­­
                </div>
                </font>
            </div>
            </td>
        </tr>
        </table>
      </div>
    </div>
  </body>
</html>
`,
		});

		console.log("Message sent: %s", info.messageId);
		// Preview only available when sending through an Ethereal account
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		console.log(`Mail has been sent to ${email}.`);
		return true;
	} else {
		throw new Error(`Error sending mail ` + error);
	}
}
