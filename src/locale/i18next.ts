import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
pt: {
		translation: {
			home: {
				choices: {
					register: {
						title: "NÃO POSSUI E-MAIL BRF?",
						/* description:
							"Cadastre uma senha para poder acessar o Portal de Gente.",
						obs: "* Cadastro é apenas para colaboradores que não possuem e-mail BRF. Caso possua e-mail, utilizar os demais canais de atendimento", */
						link: "CADASTRAR OU ALTERAR SUA SENHA",
					},
					login: {
						title: "JÁ CADASTROU SUA SENHA, OU JÁ POSSUI E-MAIL BRF?",/* 
						description:
							"<strong>Importante:</strong> Clique em acessar, caso não tenha e-mail BRF, preencha com SEUID@brf.com, da seguinte forma: <br><strong>E-mail:</strong> SEUID@brf.com <br><strong>Senha:</strong> sua senha cadastrada, e pronto!", */
						description:
							"<strong>Informação para os colaboradores sem e-mail BRF: </strong><br>Caso não tenha e-mail BRF, na próxima tela preencha o campo de e-mail da seguinte forma: <br><br><b>E-mail:</b> SEUID@brf.com",
						link: "ENTRAR",
					},
				},
			},
			form: {
				idBrf: {
					heading: "QUAL O SEU ID BRF?",
					idBrf: {
						label: "Qual seu ID BRF?",
						placeholder: "ID BRF",
						required: "Digite seu ID BRF",
						maxDigits: "Seu ID deve conter no máximo 6 dígitos",
						lenght: {
							title: "ID deve conter no máximo 6 dígitos",
						},
						userNotFound: {
							title: "ID BRF Incorreto ou inexistente",
						},
					},
				},
				profile: {
					heading:
						"Olá <strong>{{name}}</strong> , precisamos validar algumas informações",
					docNumber: {
						placeholder: "CPF",
						required: "Digite seu CPF",
						invalid: "CPF inválido",
					},
					birthDate: {
						placeholder: "Data de nascimento",
						required: "Digite sua Data de nascimento",
						invalid: "Data de nascimento inválida",
					},
					hireDate: {
						placeholder: "Data de admissão",
						required: "Digite sua Data de admissão",
						invalid: "Data de admissão inválida",
					},
					errorMessage: {
						userNotFound: "ID BRF Incorreto ou inexistente",
						maxDigits: "Seu ID deve conter no máximo 6 dígitos",
						docNumber: "CPF inválido",
						hireDate: "Data de admissão não confere",
						birthDate: "Data de nascimento não confere",
					},
				},
				password: {
					heading: "Digite sua senha e guarde com segurança!",
					password: {
						placeholder: "**************************",
						required: "Sua senha precisa respeitar as regras",
					},
					rules: {
						heading: "Sua senha precisa respeitar as seguintes regras:",
						minLen: "10 ou mais caracteres",
						uppercase: "Uma ou mais letras maiúsculas",
						lowercase: "Uma ou mais letras minúsculas",
						number: "Um ou mais números",
						special: "Um ou mais caracteres especiais",
						mother: "Não pode conter o nome de sua mãe",
						name: "Não usar seu nome ou sobrenome",
						idbrf: "Não usar o seu ID BRF",
						older: "Obs: Não usar as senhas já utilizadas anteriormente",
					},
					errorMessage: {
						misMatch: "A senha não respeita as regras mínimas exigidas.",
						api: "Ocorreu um erro em nosso sistema, tente novamente!",
						computerized: "Cadastro de senha é funcionalidade exclusiva para colaboradores sem e-mail BRF.",
					},
				},
				cancel: "Cancelar",
				submit: "Continuar",
				send: "ENVIAR",
				access: "Acessar",
				register: "CADASTRAR NOVA SENHA",
				close: "Fechar",
			},
			servicenow: {
				heading: "Aguarde, sua senha esta sendo verificada e cadastrada.",
				loading:
					"Colaborador, este cadastro pelo levar alguns minutos, agradecemos sua paciência.",

				states: {
					success: {
						heading: "<strong>{{name}}</strong>, sua senha foi<br>cadastrada!",
						text:
							"<strong>Importante:</strong> Clique em acessar, caso não tenha e-mail BRF, preencha com SEUID@brf.com, da seguinte forma: <br><strong>E-mail:</strong> SEUID@brf.com <br><strong>Senha:</strong> sua senha cadastrada, e pronto!",
					},
					error: {
						heading:
							"Erro no cadastro!",
						text:
							"Tivemos problemas para realizar o cadastro, pedimos desculpas pela inconveniência. Por favor tente novamente.<br><br><strong>Fique atento</strong> e não cadastre uma senha já utilizada anteriormente.",
					},
				},
			},
			loading: {
				waiting: "Buscando dados, aguarde...",
			},
		},
	},	
	en: {
		translation: {
			home: {
				choices: {
					register: {
						title: "DON'T HAVE BRF EMAIL?",
						/* description: "Register a password to be able to access the People Portal.", 
						obs: "* Registration is only for employees who do not have a BRF email. If you have e-mail, use the other service channels",*/
						link: "REGISTER OR CHANGE YOUR PASSWORD",
					},
					login: {
						title: "HAVE YOU ALREADY REGISTERED YOUR PASSWORD, OR DO YOU ALREADY HAVE BRF EMAIL?",
						/* description:
							"<strong> Important:</strong> Click on access, if you don't have a BRF e-mail, fill in with YOURID@brf.com, as follows: <br> <strong> E-mail: </strong> YOURID@brf.com <br> <strong> Password: </strong> your registered password, and you're done!", */
						description:
							"<strong>Information for employees without BRF email: </strong><br>If you do not have a BRF email, in the next screen fill in the email field as follows: <br><br><b>E-mail:</b> YOURID@brf.com",
						link: "LOG IN",
					},
				},
			},
			form: {
				idBrf: {
					heading: "WHAT'S YOUR ID BRF?",
					idBrf: {
						label: "Qual seu ID BRF?",
						placeholder: "ID BRF",
						required: "Enter your ID BRF",
						maxDigits: "Your ID must contain at máximo 6 digits",
					},
				},
				profile: {
					heading:
						"Hello <strong>{{name}}</strong>, we need to validate some information",
					docNumber: {
						placeholder: "CPF",
						required: "Enter your CPF",
						invalid: "Invalid Social Security Number",
					},
					birthDate: {
						placeholder: "Date of birth",
						required: "Enter your birth date",
						invalid: "Invalid date of birth",
					},
					hireDate: {
						placeholder: "Date of hire",
						required: "Enter your hireDate Date",
						invalid: "Invalid admission date",
					},
					errorMessage: {
						userNotFound: "Incorrect or nonexistent BRF ID",
						maxDigits: "Your ID must contain a maximum of 6 digits",
						docNumber: "Invalid Social Security Number",
						hireDate: "Admission date does not match",
						birthDate: "Date of birth does not match",
					},
				},
				password: {
					heading: "Enter your password and save it safely!",
					password: {
						placeholder: "**************************",
						required: "Your password must comply with the rules",
					},
					rules: {
						heading: "Your password must comply with the following rules:",
						minLen: "10 or more characters",
						uppercase: "One or more capital letters",
						lowercase: "One or more lowercase letters",
						number: "One or more numbers",
						special: "One or more special characters",
						mother: "It cannot contain your mother's name",
						name: "Do not use your first or last name",
						idbrf: "Do not use your ID BRF",
						older: "Do not use previously used passwords",
					},
					errorMessage: {
						misMatch:
							"The password does not respect the minimum rules required.",
						api: "An error has occurred in our system, please try again!",
						computerized: "Password registration is an exclusive feature for employees without BRF email.",
					},
				},
				cancel: "Cancel",
				submit: "Next",
				send: "SEND",
				access: "Access",
				register: "REGISTER NEW PASSWORD",
				close: "Close",
			},
			servicenow: {
				heading: "Wait, your password is being verified and registered.",
				loading:
					"Collaborator, this registration for taking a few minutes, we appreciate your patience.",

				states: {
					success: {
						heading:
							"<strong> {{name}} </strong>, your password has been registered!",
						text:
							"<strong> Important:</strong> Click on access, if you don't have a BRF e-mail, fill in with YOURID@brf.com, as follows: <br> <strong> Email: </strong> YOURID@brf.com <br> <strong> Password: </strong> your registered password, and you're done!",
					},
					error: {
						heading:
							"Registration error!",
						text:
							"We had problems to register, we apologize for the inconvenience. Please try again.<br><br><strong>Stay tuned</strong> and do not register a previously used password.",
					},
				},
			},
			loading: {
				waiting: "Fetching data, please wait ...",
			},
		},
	},
	es: {
		translation: {
			home: {
				choices: {
					register: {
						title: "¿NO TIENE BRF EMAIL?",
						/* description:
							"Registre una contraseña para poder acceder al Portal de personas.",
						obs: "* El registro es solo para empleados que no tienen un correo electrónico BRF. Si tiene correo electrónico, use los otros canales de servicio", */
						link: "REGISTRARSE O CAMBIAR SU CONTRASEÑA",
					},
					login: {
						title: "¿YA HA REGISTRADO SU CONTRASEÑA O YA TIENE BRF EMAIL?",
						/* description:
							"<strong>Importante:</strong> Haga clic en acceso, si no tiene un correo electrónico BRF, complete SUAID@brf.com, de la siguiente manera:<br><strong>Email:</strong> SEUID@brf.com <br><strong>Contraseña:</strong> su contraseña registrada, ¡y ya está!", */
						description:
							"<strong>Información para empleados sin correo electrónico BRF: </strong><br>Si no tiene un correo electrónico de BRF, en la siguiente pantalla complete el campo de correo electrónico de la siguiente manera: <br><br><b>Email:</b> SUAID@brf.com",
						link: "INICIAR SESIÓN",
					},
				},
			},
			form: {
				idBrf: {
					heading: "¿CUÁL ES SU ID DE BRF?",
					idBrf: {
						label: "¿Cuál es tu ID de BRF?",
						placeholder: "ID BRF",
						required: "Ingrese su ID de BRF",
						maxDigits: "Su identificación debe contener al máximo 6 dígitos",
					},
				},
				profile: {
					heading:
						"Hola <strong> {{name}} </strong>, necesitamos validar alguna información",
					docNumber: {
						placeholder: "CPF",
						required: "Ingrese su CPF",
						invalid: "Número de seguro social no válido",
					},
					birthDate: {
						placeholder: "Fecha de nacimiento",
						required: "Ingrese su fecha de nacimiento",
						invalid: "Fecha de nacimiento invalida",
					},
					hireDate: {
						placeholder: "Data a Data de admissão",
						required: "Digite sua Data de admissão",
						invalid: "Fecha de admisión no válida",
					},
					errorMessage: {
						userNotFound: "ID de BRF incorrecta o inexistente",
						maxDigits: "Su identificación debe contener un máximo de 6 dígitos",
						docNumber: "Número de seguro social no válido",
						hireDate: "La fecha de ingreso no coincide",
						birthDate: "La fecha de nacimiento no coincide.",
					},
				},
				password: {
					heading: "¡Ingrese su contraseña y guárdela de manera segura!",
					password: {
						placeholder: "**************************",
						required: "Su contraseña debe cumplir con las reglas.",
					},
					rules: {
						heading: "Su contraseña debe cumplir con las siguientes reglas:",
						minLen: "10 o más personajes",
						uppercase: "Una o más letras mayúsculas",
						lowercase: "Una o más letras minúsculas",
						number: "Uno o mas numeros",
						special: "Uno o mas personajes especiales",
						mother: "No puede contener el nombre de tu madre",
						name: "No use tu nombre o apellido",
						idbrf: "No use tu ID BRF",
						older: "Nota: No use contraseñas usadas anteriormente",
					},
					errorMessage: {
						misMatch: "La contraseña no respeta las reglas mínimas requeridas.",
						api:
							"Se ha producido un error en nuestro sistema, ¡inténtalo de nuevo!",
						computerized: "El registro de contraseña es una función exclusiva para empleados sin correo electrónico de BRF.",
					},
				},
				cancel: "Cancelar",
				submit: "Seguir",
				send: "ENVIAR",
				access: "Acceso",
				register: "REGISTRAR NUEVA CONTRASEÑA",
				close: "Cerca",
			},
			servicenow: {
				heading: "Espere, su contraseña está siendo verificada y registrada.",
				loading:
					"Colaborador, este registro por tomarse unos minutos, le agradecemos su paciencia.",

				states: {
					success: {
						heading:
							"<strong> {{name}} </strong>, ¡su contraseña ha sido registrada!",
						text:
							"<strong>Importante:</strong> Haga clic en acceso, si no tiene un correo electrónico BRF, complete SUAID@brf.com, de la siguiente manera:<br><strong>Email:</strong> SUAID@brf.com <br><strong>Contraseña:</strong> su contraseña registrada, ¡y ya está!",
					},
					error: {
						heading:
							"¡Error de registro!",
						text:
							"Tivemos problemas para realizar o catastro, pedimos desculpas pela inconveniência. Por favor tente novamente.<br><br><strong>Fique atento </strong> e não catastro uma senha já usado anteriormente.",
					},
				},
			},
			loading: {
				waiting: "Obteniendo datos, espere ...",
			},
		},
	},
	tr: {
		translation: {
			home: {
				choices: {
					register: {
						title: "BRF e-mailiniz yok mu?",
						/* description:
							"Cadastre uma senha para poder acessar o Portal de Gente.",
						obs: "* Cadastro é apenas para colaboradores que não possuem e-mail BRF. Caso possua e-mail, utilizar os demais canais de atendimento", */
						link: "KAYIT OLUN VEYA ŞİFRENİZİ DEĞİŞTİRİN",
					},
					login: {
						title: "Parolanız zaten kayıtlı veya BRF e-mailiniz var mı?",/* 
						description:
							"<strong>Importante:</strong> Clique em acessar, caso não tenha e-mail BRF, preencha com SEUID@brf.com, da seguinte forma: <br><strong>E-mail:</strong> SEUID@brf.com <br><strong>Senha:</strong> sua senha cadastrada, e pronto!", */
						description:
							"<strong>BRF e-maili olmayan çalışanlar için bilgilendirme: </strong><br>BRF e-mailiniz yoksa, bir sonraki ekranda e-mail alanını aşağdaki şekilde doldurun: <br><br><b>E-mail:</b> BRFID@brf.com",
						link: "GİRİŞ",
					},
				},
			},
			form: {
				idBrf: {
					heading: "BRF ID NİZ NEDİR?",
					idBrf: {
						label: "BRF ID NİZ NEDİR?",
						placeholder: "BRF ID",
						required: "BRF kimliğinizi girin", //translate  Digite seu ID BRF
						maxDigits: "Kimliğiniz maksimum 6 hane içermelidir", //translate Seu ID deve conter no máximo 6 dígitos
						lenght: {
							title: "Kimlik en fazla 6 basamak içermelidir", //translate ID deve conter no máximo 6 dígitos
						},
						userNotFound: {
							title: "ID MEVCUT DEĞİL", //translate ID BRF Incorreto ou inexistente
						},
					},
				},
				profile: {
					heading:
						"Merhaba <strong>{{name}}</strong>, bazı bilgileri doğrulamamız gerekiyor.",
					docNumber: {
						placeholder: "CPF",
						required: "Required CPF",
						invalid: "Invalid CPF",
					},
					birthDate: {
						placeholder: "DOĞUM TARİHİ",
						required: "Doğum tarihinizi giriniz", //translate Digite sua Data de nascimento
						invalid: "Geçersiz doğum tarihi", //translate Data de nascimento inválida
					},
					hireDate: {
						placeholder: "İŞE GİRİŞ TARİHİ",
						required: "Kabul Tarihinizi Girin", //translate Digite sua Data de admissão
						invalid: "Geçersiz kabul tarihi", //translate Data de admissão inválida
					},
					errorMessage: {
						userNotFound: "ID MEVCUT DEĞİL", //translate ID BRF Incorreto ou inexistente
						maxDigits: "Kimliğiniz maksimum 6 hane içermelidir", //translate Seu ID deve conter no máximo 6 dígitos
						docNumber: "Invalid CPF",
						hireDate: "Kabul tarihi eşleşmiyor", //translate Data de admissão não confere
						birthDate: "Doğum tarihi eşleşmiyor", //translate Data de nascimento não confere
					},
				},
				password: {
					heading: "Şifrenizi girin ve güvenli bir şekilde kaydedin!",
					password: {
						placeholder: "**************************",
						required: "Şifreniz aşağıdaki kurallara uygun olmalıdır",
					},
					rules: {
						heading: "Şifreniz aşağıdaki kurallara uygun olmalıdır:",
						minLen: "10 veya daha fazla karakter",
						uppercase: "Bir veya daha fazla büyük harf",
						lowercase: "Bir veya daha fazla küçük harf",
						number: "Bir veya daha fazla sayı",
						special: "Bir veya daha fazla özel karakter. Ör: (@ *!%;:.)",
						mother: "Annenizin adını içeremez",
						name: "İsminizi kullanmayın",
						idbrf: "BRF ID nizi kullanmayın",
						older: "Not: Daha önce kullandığınız şifreleri kullanmayın",
					},
					errorMessage: {
						misMatch: "Parola, gerekli minimum kurallara uymuyor.", //translate A senha não respeita as regras mínimas exigidas.
						api: "Sistemimizde bir hata oluştu, lütfen tekrar deneyin!", //translate Ocorreu um erro em nosso sistema, tente novamente!
						computerized: "Şifre kaydı, BRF e-maili olmayan çalışanlar içindir",
					},
				},
				cancel: "İPTAL",
				submit: "DEVAM",
				send: "GÖNDER",
				access: "Giriş", //translate Acessar
				register: "YENİ ŞİFRE KAYDET",
				close: "Kapat", //translate Fechar
			},
			servicenow: {
				heading: "Bekleyin, şifreniz doğrulanıyor ve kaydediliyor.",
				loading:
					"Kayıt işlemi birkaç dakika alacaktır, sabrınız için teşekkür ederiz.",
				states: {
					success: {
						heading: "<strong>{{name}}</strong>, Şifreniz kaydedildi!",
						text:
							"<strong>Önemli:</strong> Erişim'e tıklayın, BRF e-mail iniz yoksa, e-mail alanını aşağıdaki gibi doldurun.<br><strong>E-mail:</strong> SEUID@brf.com <br><strong>Şifre:</strong> Kayıtlı şifreniz, ve tamam!",
					},
					error: {
						heading:
							"Kayıt Hatası!", //translate Erro no cadastro!
						text:
							"Kayıt sırasında hata oluştu. Lütfen tekrar deneyin.",
					},
				},
			},
			loading: {
				waiting: "Veriler alınıyor, lütfen bekleyiniz.",
			},
		},
	},
	ar: {
		translation: {
			home: {
				choices: {
					register: {
						title: `هل أنت لا تملك بريد "بي آر إف" الإلكتروني؟`,
						/* description:
							"Cadastre uma senha para poder acessar o Portal de Gente.",
						obs: "* Cadastro é apenas para colaboradores que não possuem e-mail BRF. Caso possua e-mail, utilizar os demais canais de atendimento", */
						link: `سجّل أو أعد تعيين كلمة المرور`,
					},
					login: {
						title: `هل تم تسجيل كلمة المرور مسبقاً ، أو هل يوجد لديك بريد "بي آر إف" الإلكتروني؟`,/* 
						description:
							"<strong>Importante:</strong> Clique em acessar, caso não tenha e-mail BRF, preencha com SEUID@brf.com, da seguinte forma: <br><strong>E-mail:</strong> SEUID@brf.com <br><strong>Senha:</strong> sua senha cadastrada, e pronto!", */
						description:
						`<strong> معلومات للموظفين بدون بريد ""بي آر إف"" الإلكتروني:</strong><br> إذا لم تملك بريد ""بي آر إف"" الإلكتروني ، قم بتعبئة حقل البريد الإلكتروني في الصفحة التالية كالآتي: <br><br>
						البريد الإلكتروني: <strong>رقمك الوظيفي</strong>@brf.com`,
						// "<strong>Informação para os colaboradores sem e-mail BRF: </strong><br>Caso não tenha e-mail BRF, na próxima tela preencha o campo de e-mail da seguinte forma: <br><br><b>E-mail:</b> SEUID@brf.com",
						link: "دخول",
					},
				},
			},
			form: {
				idBrf: {
					heading: "ما هو رقمك الوظيفي؟",
					idBrf: {
						label: "ما هو رقمك الوظيفي؟",
						placeholder: "الرقم الوظيفي",
						required: "أدخل معرف BRF الخاص بك", //translate Digite seu ID BRF
						maxDigits: "يجب أن يحتوي هويتك على 6 أرقام كحد أقصى", //translate Seu ID deve conter no máximo 6 dígitos
						lenght: {
							title: "يجب أن يحتوي المعرف على 6 أرقام كحد أقصى", //translate ID deve conter no máximo 6 dígitos
						},
						userNotFound: {
							title: "معرف BRF غير صحيح أو غير موجود", //translate ID BRF Incorreto ou inexistente
						},
					},
				},
				profile: {
					heading:
					"مرحباً <strong>{{name}}</strong>، نود التأكد من بعض المعلومات للمتابعة.",
					docNumber: {
						placeholder: "CPF",
						required: "Required CPF",
						invalid: "Invalid CPF",
					},
					birthDate: {
						placeholder: "تاريخ الميلاد",
						required: "أدخل تاريخ ميلادك", //translate Digite sua Data de nascimento
						invalid: "تاريخ ميلاد غير صالح", //ranslate Data de nascimento inválida
					},
					hireDate: {
						placeholder: "تاريخ الإلتحاق",
						required: "أدخل تاريخ القبول الخاص بك", //translate Digite sua Data de admissão
						invalid: "تاريخ القبول غير صحيح", //translate Data de admissão inválida
					},
					errorMessage: {
						userNotFound: "معرف BRF غير صحيح أو غير موجود", //translate ID BRF Incorreto ou inexistente
						maxDigits: "يجب أن يحتوي هويتك على 6 أرقام كحد أقصى", //translate Seu ID deve conter no máximo 6 dígitos
						docNumber: "Invalid CPF",
						hireDate: "تاريخ القبول غير متطابق", //translate Data de admissão não confere
						birthDate: "تاريخ الميلاد غير متطابق", //translate Data de nascimento não confere
					},
				},
				password: {
					heading: "الرجاء إدخال كلمة المرور  وحفظها في مكان آمن!",
					password: {
						placeholder: "**************************",
						required: "كلمة السر يجب أن تتبع الشروط التالية",
					},
					rules: {
						heading: "كلمة السر يجب أن تتبع الشروط التالية:",
						minLen: "10 خانات أو أكثر",
						uppercase: "حرف إنجليزي كبير أو أكثر",
						lowercase: "حرف إنجليزي صغير أو أكثر",
						number: "رقم أو أكثر",
						special: "رمز خاص (مثل: @*!%;.) أو أكثر",
						mother: "كلمة المرور يجب أن تكون باللغة الإنجليزية، وأن لا تحتوي على إسم والدتك",
						name: "لا تستخدم إسمك",
						idbrf: `لا تستخدم رقم "بي آر إف" الوظيفي`,
						older: "ملحوظة: لاتستخدم كلمة سر تم إستخدامها مسبقاً",
					},
					errorMessage: {
						misMatch: "كلمة المرور لا تحترم الحد الأدنى من القواعد المطلوبة.", //translate A senha não respeita as regras mínimas exigidas.
						api: "لقد حدث خطأ في نظامنا ، يرجى المحاولة مرة أخرى!", //translate Ocorreu um erro em nosso sistema, tente novamente!
						computerized: `خاصية التسجيل حصرية فقط للموظفين بدون بريد "بي آر إف" الإلكتروني.`,
					},
				},
				cancel: "إلغاء",
				submit: "متابعة",
				send: "إرسال",
				access: "التمكن من", //translate Acessar
				register: "تسجيل كلمة مرور جديدة",
				close: "قريب", //translate Fechar
			},
			servicenow: {
				heading: "الرجاء الإنتظار، كلمة السر الجديدة تحت التدقيق والتسجيل.",
				loading:
					"عزيزنا، عملية التسجيل قد تأخذ بضع دقائق، نقدر لك إنتظارك.",
				states: {
					success: {
						heading: "<strong>{{name}}</strong>, لقد تم تسجيل كلمة السر الجديدة بنجاح!",
						text:
							`"هام: إضغط على ""دخول""، إذا لم يكن لديك بريد ""بي آر إف"" إلكتروني، قم بتعبئة خانة البريد على النحو التالي: <br>
							البريد الإلكتروني: [رقمك الوظيفي]@brf.com <br>
							كلمة السر: كلمة السر المسجلة
							وهكذا تم الإنتهاء!"`,
							// "<strong>Importante:</strong> Clique em acessar, caso não tenha e-mail BRF, preencha com SEUID@brf.com, da seguinte forma: <br><strong>E-mail:</strong> SEUID@brf.com <br><strong>Senha:</strong> sua senha cadastrada, e pronto!",
					},
					error: {
						heading:
							"خطأ في التسجيل!", //translate Erro no cadastro!
						text:
							"لقد واجهتنا مشكلة في التسجيل، نعتذر على الإزعاج. الرجاء المحاولة مرة أخرى.",
					},
				},
			},
			loading: {
				waiting: "يتم تحضير البيانات، الرجاء الإنتظار ...",
			},
		},
	},
};

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources,
		detection: {
			order: ["navigator"],
		},
		fallbackLng: ["pt", "en", "es", "tr","ar"],
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
