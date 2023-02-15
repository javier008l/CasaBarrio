exports.sendSMS = async (telefono) => {
	let direccion = Math.random(10);
	console.log(`sending sms with code ${direccion} to for number ${telefono}`);
};
