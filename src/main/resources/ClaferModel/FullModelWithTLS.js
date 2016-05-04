scope({c0_Algorithm:15, c0_Cipher:4, c0_CipherSuite:4, c0_Digest:4, c0_DigitalSignatureAlgm:2, c0_Enum:20, c0_KeyAgreementAlgorithm:2, c0_KeyDerivationAlgorithm:3, c0_Mode:4, c0_Padding:2, c0_Performance:4, c0_Security:5, c0_SymmetricBlockCipher:3, c0_SymmetricCipher:3, c0_TLS_Version:5, c0_Task:4, c0_cipher:4, c0_cipherSecurity:4, c0_ciphersuites:4, c0_classPerformance:15, c0_description:15, c0_keyAgreement:4, c0_keySize:3, c0_messageAuth:4, c0_mode:3, c0_name:15, c0_outputSize:4, c0_padding:3, c0_performance:15, c0_security:15, c0_signature:4, c0_tlsProtocol:4, c1_description:4, c1_outputSize:3, c1_performance:4, c1_security:4});
defaultScope(1);
intRange(-8, 7);
stringLength(48);

c0_Enum = Abstract("c0_Enum");
c0_Security = Abstract("c0_Security");
c0_NoSecurity = Clafer("c0_NoSecurity").withCard(1, 1);
c0_Broken = Clafer("c0_Broken").withCard(1, 1);
c0_Weak = Clafer("c0_Weak").withCard(1, 1);
c0_Medium = Clafer("c0_Medium").withCard(1, 1);
c0_Strong = Clafer("c0_Strong").withCard(1, 1);
c0_Performance = Abstract("c0_Performance");
c0_VerySlow = Clafer("c0_VerySlow").withCard(1, 1);
c0_Slow = Clafer("c0_Slow").withCard(1, 1);
c0_Fast = Clafer("c0_Fast").withCard(1, 1);
c0_VeryFast = Clafer("c0_VeryFast").withCard(1, 1);
c0_TLS_Version = Abstract("c0_TLS_Version");
c0_SSL2 = Clafer("c0_SSL2").withCard(1, 1);
c0_SSL3 = Clafer("c0_SSL3").withCard(1, 1);
c0_TLS1_0 = Clafer("c0_TLS1_0").withCard(1, 1);
c0_TLS1_1 = Clafer("c0_TLS1_1").withCard(1, 1);
c0_TLS1_2 = Clafer("c0_TLS1_2").withCard(1, 1);
c0_Padding = Abstract("c0_Padding");
c0_NoPadding = Clafer("c0_NoPadding").withCard(1, 1);
c0_PKCS5Padding = Clafer("c0_PKCS5Padding").withCard(1, 1);
c0_Mode = Abstract("c0_Mode");
c0_ECB = Clafer("c0_ECB").withCard(1, 1);
c0_CBC = Clafer("c0_CBC").withCard(1, 1);
c0_OFB = Clafer("c0_OFB").withCard(1, 1);
c0_GCM = Clafer("c0_GCM").withCard(1, 1);
c0_Algorithm = Abstract("c0_Algorithm");
c0_name = c0_Algorithm.addChild("c0_name").withCard(1, 1);
c0_description = c0_Algorithm.addChild("c0_description").withCard(1, 1);
c0_security = c0_Algorithm.addChild("c0_security").withCard(1, 1);
c0_performance = c0_Algorithm.addChild("c0_performance").withCard(1, 1);
c0_classPerformance = c0_Algorithm.addChild("c0_classPerformance").withCard(1, 1);
c0_Cipher = Abstract("c0_Cipher");
c0_SymmetricCipher = Abstract("c0_SymmetricCipher");
c0_keySize = c0_SymmetricCipher.addChild("c0_keySize").withCard(1, 1);
c0_AsymmetricCipher = Abstract("c0_AsymmetricCipher");
c0_SymmetricBlockCipher = Abstract("c0_SymmetricBlockCipher");
c0_mode = c0_SymmetricBlockCipher.addChild("c0_mode").withCard(1, 1);
c0_padding = c0_SymmetricBlockCipher.addChild("c0_padding").withCard(1, 1);
c0_DigitalSignatureAlgm = Abstract("c0_DigitalSignatureAlgm");
c0_KeyAgreementAlgorithm = Abstract("c0_KeyAgreementAlgorithm");
c0_Digest = Abstract("c0_Digest");
c0_outputSize = c0_Digest.addChild("c0_outputSize").withCard(1, 1);
c0_KeyDerivationAlgorithm = Abstract("c0_KeyDerivationAlgorithm");
c1_outputSize = c0_KeyDerivationAlgorithm.addChild("c1_outputSize").withCard(0, 1);
c0_Task = Abstract("c0_Task");
c1_description = c0_Task.addChild("c1_description").withCard(1, 1);
c0_AES128 = Clafer("c0_AES128").withCard(1, 1);
c0_s = c0_AES128.addChild("c0_s").withCard(1, 1);
c0_AES192 = Clafer("c0_AES192").withCard(1, 1);
c1_s = c0_AES192.addChild("c1_s").withCard(1, 1);
c0_AES256 = Clafer("c0_AES256").withCard(1, 1);
c2_s = c0_AES256.addChild("c2_s").withCard(1, 1);
c0_SHA256 = Clafer("c0_SHA256").withCard(1, 1);
c0_SHA384 = Clafer("c0_SHA384").withCard(1, 1);
c0_SHA1 = Clafer("c0_SHA1").withCard(1, 1);
c0_MD5 = Clafer("c0_MD5").withCard(1, 1);
c0_ECDHE = Clafer("c0_ECDHE").withCard(1, 1);
c0_ECDSA = Clafer("c0_ECDSA").withCard(1, 1);
c0_pbkdf2 = Clafer("c0_pbkdf2").withCard(1, 1);
c0_scrypt = Clafer("c0_scrypt").withCard(1, 1);
c0_bcrypt = Clafer("c0_bcrypt").withCard(1, 1);
c0_RSA_Sig = Clafer("c0_RSA_Sig").withCard(1, 1);
c0_RSA_Asymm = Clafer("c0_RSA_Asymm").withCard(1, 1);
c0_RSA_KeyAgr = Clafer("c0_RSA_KeyAgr").withCard(1, 1);
c0_CipherSuite = Abstract("c0_CipherSuite");
c0_cipher = c0_CipherSuite.addChild("c0_cipher").withCard(0, 1);
c0_tlsProtocol = c0_CipherSuite.addChild("c0_tlsProtocol").withCard(1, 1);
c0_keyAgreement = c0_CipherSuite.addChild("c0_keyAgreement").withCard(1, 1);
c0_signature = c0_CipherSuite.addChild("c0_signature").withCard(1, 1);
c0_messageAuth = c0_CipherSuite.addChild("c0_messageAuth").withCard(1, 1);
c0_cipherSecurity = c0_CipherSuite.addChild("c0_cipherSecurity").withCard(1, 1);
c1_security = c0_CipherSuite.addChild("c1_security").withCard(1, 1);
c1_performance = c0_CipherSuite.addChild("c1_performance").withCard(1, 1);
c0_TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 = Clafer("c0_TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384").withCard(1, 1);
c0_TLS_RSA_WITH_AES_256_CBC_SHA256 = Clafer("c0_TLS_RSA_WITH_AES_256_CBC_SHA256").withCard(1, 1);
c0_TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 = Clafer("c0_TLS_DHE_RSA_WITH_AES_128_GCM_SHA256").withCard(1, 1);
c0_SSL_RSA_WITH_NULL_MD5 = Clafer("c0_SSL_RSA_WITH_NULL_MD5").withCard(1, 1);
c0_SecureCommunication = Clafer("c0_SecureCommunication").withCard(1, 1);
c0_ciphersuites = c0_SecureCommunication.addChild("c0_ciphersuites").withCard(1);
c0_SymmetricEncryption = Clafer("c0_SymmetricEncryption").withCard(1, 1);
c1_cipher = c0_SymmetricEncryption.addChild("c1_cipher").withCard(1, 1);
c0_SecurePassword = Clafer("c0_SecurePassword").withCard(1, 1);
c0_kda = c0_SecurePassword.addChild("c0_kda").withCard(1, 1);
c0_PasswordBasedEncryption = Clafer("c0_PasswordBasedEncryption").withCard(1, 1);
c1_kda = c0_PasswordBasedEncryption.addChild("c1_kda").withCard(1, 1);
c2_cipher = c0_PasswordBasedEncryption.addChild("c2_cipher").withCard(1, 1);
c0_Security.extending(c0_Enum).refToUnique(Int);
c0_NoSecurity.extending(c0_Security);
Constraint(implies(some(global(c0_NoSecurity)), equal(joinRef(global(c0_NoSecurity)), constant(0))));
c0_Broken.extending(c0_Security);
Constraint(implies(some(global(c0_Broken)), equal(joinRef(global(c0_Broken)), constant(1))));
c0_Weak.extending(c0_Security);
Constraint(implies(some(global(c0_Weak)), equal(joinRef(global(c0_Weak)), constant(2))));
c0_Medium.extending(c0_Security);
Constraint(implies(some(global(c0_Medium)), equal(joinRef(global(c0_Medium)), constant(3))));
c0_Strong.extending(c0_Security);
Constraint(implies(some(global(c0_Strong)), equal(joinRef(global(c0_Strong)), constant(4))));
c0_Performance.extending(c0_Enum).refToUnique(Int);
c0_VerySlow.extending(c0_Performance);
Constraint(implies(some(global(c0_VerySlow)), equal(joinRef(global(c0_VerySlow)), constant(1))));
c0_Slow.extending(c0_Performance);
Constraint(implies(some(global(c0_Slow)), equal(joinRef(global(c0_Slow)), constant(2))));
c0_Fast.extending(c0_Performance);
Constraint(implies(some(global(c0_Fast)), equal(joinRef(global(c0_Fast)), constant(3))));
c0_VeryFast.extending(c0_Performance);
Constraint(implies(some(global(c0_VeryFast)), equal(joinRef(global(c0_VeryFast)), constant(4))));
c0_TLS_Version.extending(c0_Enum).refToUnique(Int);
c0_SSL2.extending(c0_TLS_Version);
Constraint(implies(some(global(c0_SSL2)), equal(joinRef(global(c0_SSL2)), constant(1))));
c0_SSL3.extending(c0_TLS_Version);
Constraint(implies(some(global(c0_SSL3)), equal(joinRef(global(c0_SSL3)), constant(2))));
c0_TLS1_0.extending(c0_TLS_Version);
Constraint(implies(some(global(c0_TLS1_0)), equal(joinRef(global(c0_TLS1_0)), constant(3))));
c0_TLS1_1.extending(c0_TLS_Version);
Constraint(implies(some(global(c0_TLS1_1)), equal(joinRef(global(c0_TLS1_1)), constant(4))));
c0_TLS1_2.extending(c0_TLS_Version);
Constraint(implies(some(global(c0_TLS1_2)), equal(joinRef(global(c0_TLS1_2)), constant(5))));
c0_Padding.extending(c0_Enum);
c0_NoPadding.extending(c0_Padding);
c0_PKCS5Padding.extending(c0_Padding);
c0_Mode.extending(c0_Enum);
c0_ECB.extending(c0_Mode);
c0_CBC.extending(c0_Mode);
c0_OFB.extending(c0_Mode);
c0_GCM.extending(c0_Mode);
c0_name.refTo(string);
c0_description.refTo(string);
c0_security.refTo(c0_Security);
c0_performance.refTo(c0_Performance);
c0_classPerformance.refTo(c0_Performance);
c0_Cipher.extending(c0_Algorithm);
c0_SymmetricCipher.extending(c0_Cipher);
c0_keySize.refTo(Int);
c0_SymmetricCipher.addConstraint(equal(joinRef(join($this(), c0_classPerformance)), global(c0_Fast)));
c0_AsymmetricCipher.extending(c0_Cipher);
c0_AsymmetricCipher.addConstraint(equal(joinRef(join($this(), c0_classPerformance)), global(c0_VerySlow)));
c0_SymmetricBlockCipher.extending(c0_SymmetricCipher);
c0_mode.refTo(c0_Mode);
c0_padding.refTo(c0_Padding);
c0_SymmetricBlockCipher.addConstraint(notEqual(joinRef(join($this(), c0_mode)), global(c0_ECB)));
c0_SymmetricBlockCipher.addConstraint(implies(equal(joinRef(join($this(), c0_mode)), global(c0_CBC)), notEqual(joinRef(join($this(), c0_padding)), global(c0_NoPadding))));
c0_DigitalSignatureAlgm.extending(c0_Algorithm);
c0_DigitalSignatureAlgm.addConstraint(equal(joinRef(join($this(), c0_classPerformance)), global(c0_VerySlow)));
c0_KeyAgreementAlgorithm.extending(c0_Algorithm);
c0_KeyAgreementAlgorithm.addConstraint(equal(joinRef(join($this(), c0_classPerformance)), global(c0_Slow)));
c0_Digest.extending(c0_Algorithm);
c0_outputSize.refTo(Int);
c0_Digest.addConstraint(equal(joinRef(join($this(), c0_classPerformance)), global(c0_VeryFast)));
c0_KeyDerivationAlgorithm.extending(c0_Algorithm);
c1_outputSize.refTo(Int);
c0_KeyDerivationAlgorithm.addConstraint(equal(joinRef(join($this(), c0_classPerformance)), global(c0_Slow)));
c1_description.refTo(string);
c0_AES128.extending(c0_SymmetricBlockCipher);
c0_AES128.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"AES\"")));
c0_AES128.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"Advanced Encryption Standard (AES) cipher\"")));
c0_AES128.addConstraint(equal(joinRef(join($this(), c0_keySize)), constant(128)));
c0_AES128.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_VeryFast)));
c0_AES128.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Medium)));
c0_AES192.extending(c0_SymmetricBlockCipher);
c0_AES192.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"AES\"")));
c0_AES192.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"Advanced Encryption Standard (AES) cipher\"")));
c0_AES192.addConstraint(equal(joinRef(join($this(), c0_keySize)), constant(192)));
c0_AES192.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Fast)));
c0_AES192.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Strong)));
c0_AES256.extending(c0_SymmetricBlockCipher);
c0_AES256.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"AES\"")));
c0_AES256.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"Advanced Encryption Standard (AES) cipher\"")));
c0_AES256.addConstraint(equal(joinRef(join($this(), c0_keySize)), constant(256)));
c0_AES256.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Fast)));
c0_AES256.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Strong)));
c0_SHA256.extending(c0_Digest);
c0_SHA256.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"SHA-256 digest\"")));
c0_SHA256.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-256\"")));
c0_SHA256.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(256)));
c0_SHA256.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Strong)));
c0_SHA256.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Fast)));
c0_SHA384.extending(c0_Digest);
c0_SHA384.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"SHA-384 digest\"")));
c0_SHA384.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-384\"")));
c0_SHA384.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(384)));
c0_SHA384.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Strong)));
c0_SHA384.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_VerySlow)));
c0_SHA1.extending(c0_Digest);
c0_SHA1.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-1\"")));
c0_SHA1.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"SHA-1 digest\"")));
c0_SHA1.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_VeryFast)));
c0_SHA1.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Weak)));
c0_SHA1.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(160)));
c0_MD5.extending(c0_Digest);
c0_MD5.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"MD5\"")));
c0_MD5.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"MD5 digest\"")));
c0_MD5.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_VeryFast)));
c0_MD5.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Broken)));
c0_MD5.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(128)));
c0_ECDHE.extending(c0_KeyAgreementAlgorithm);
c0_ECDHE.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"ECDHE\"")));
c0_ECDHE.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"Key exchange algorithm\"")));
c0_ECDHE.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Strong)));
c0_ECDHE.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Fast)));
c0_ECDSA.extending(c0_DigitalSignatureAlgm);
c0_ECDSA.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"ECDSA\"")));
c0_ECDSA.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"Digital signature\"")));
c0_ECDSA.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Medium)));
c0_ECDSA.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Fast)));
c0_pbkdf2.extending(c0_KeyDerivationAlgorithm);
c0_pbkdf2.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"PBKDF2\"")));
c0_pbkdf2.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"PBKDF2 key derivation\"")));
c0_pbkdf2.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Slow)));
c0_pbkdf2.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Medium)));
c0_scrypt.extending(c0_KeyDerivationAlgorithm);
c0_scrypt.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"scrypt\"")));
c0_scrypt.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"Scrypt password-based key derivation\"")));
c0_scrypt.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_VerySlow)));
c0_scrypt.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Strong)));
c0_bcrypt.extending(c0_KeyDerivationAlgorithm);
c0_bcrypt.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"bcrypt\"")));
c0_bcrypt.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"Bcrypt password-based key derivation\"")));
c0_bcrypt.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Slow)));
c0_bcrypt.addConstraint(equal(joinRef(join($this(), c1_outputSize)), constant(192)));
c0_bcrypt.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Medium)));
c0_RSA_Sig.extending(c0_DigitalSignatureAlgm);
c0_RSA_Sig.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"RSA\"")));
c0_RSA_Sig.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"RSA Algm\"")));
c0_RSA_Sig.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Strong)));
c0_RSA_Sig.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Slow)));
c0_RSA_Asymm.extending(c0_AsymmetricCipher);
c0_RSA_Asymm.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"RSA\"")));
c0_RSA_Asymm.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"RSA Algm\"")));
c0_RSA_Asymm.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Strong)));
c0_RSA_Asymm.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_VerySlow)));
c0_RSA_KeyAgr.extending(c0_KeyAgreementAlgorithm);
c0_RSA_KeyAgr.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"RSA\"")));
c0_RSA_KeyAgr.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"RSA Algm\"")));
c0_RSA_KeyAgr.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Medium)));
c0_RSA_KeyAgr.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Slow)));
c0_cipher.refTo(c0_SymmetricBlockCipher);
c0_tlsProtocol.refTo(c0_TLS_Version);
c0_keyAgreement.refTo(c0_KeyAgreementAlgorithm);
c0_signature.refTo(c0_DigitalSignatureAlgm);
c0_messageAuth.refTo(c0_Digest);
c0_CipherSuite.addConstraint(implies(or(equal(joinRef(join($this(), c0_messageAuth)), global(c0_SHA384)), equal(joinRef(join($this(), c0_messageAuth)), global(c0_SHA256))), greaterThanEqual(joinRef(joinRef(join($this(), c0_tlsProtocol))), joinRef(global(c0_TLS1_2)))));
c0_cipherSecurity.refTo(Int);
c0_CipherSuite.addConstraint(equal(joinRef(join($this(), c0_cipherSecurity)), ifThenElse(some(join($this(), c0_cipher)), joinRef(joinRef(join(joinRef(join($this(), c0_cipher)), c0_security))), constant(0))));
c1_security.refTo(Int);
c0_CipherSuite.addConstraint(equal(joinRef(join($this(), c1_security)), minimum(union(union(union(joinRef(joinRef(join(joinRef(join($this(), c0_messageAuth)), c0_security))), joinRef(joinRef(join(joinRef(join($this(), c0_keyAgreement)), c0_security)))), joinRef(joinRef(join(joinRef(join($this(), c0_signature)), c0_security)))), joinRef(join($this(), c0_cipherSecurity))))));
c1_performance.refTo(Int);
c0_CipherSuite.addConstraint(equal(joinRef(join($this(), c1_performance)), minimum(union(union(union(joinRef(joinRef(join(joinRef(join($this(), c0_signature)), c0_classPerformance))), joinRef(joinRef(join(joinRef(join($this(), c0_keyAgreement)), c0_classPerformance)))), joinRef(joinRef(join(joinRef(join($this(), c0_cipher)), c0_classPerformance)))), joinRef(joinRef(join(joinRef(join($this(), c0_messageAuth)), c0_classPerformance)))))));
c0_TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384.extending(c0_CipherSuite);
c0_TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384.addConstraint(equal(joinRef(join($this(), c0_cipher)), global(c0_AES256)));
c0_TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384.addConstraint(equal(joinRef(join(joinRef(join($this(), c0_cipher)), c0_mode)), global(c0_CBC)));
c0_TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384.addConstraint(equal(joinRef(join($this(), c0_signature)), global(c0_RSA_Sig)));
c0_TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384.addConstraint(equal(joinRef(join($this(), c0_keyAgreement)), global(c0_ECDHE)));
c0_TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384.addConstraint(equal(joinRef(join($this(), c0_messageAuth)), global(c0_SHA384)));
c0_TLS_RSA_WITH_AES_256_CBC_SHA256.extending(c0_CipherSuite);
c0_TLS_RSA_WITH_AES_256_CBC_SHA256.addConstraint(equal(joinRef(join($this(), c0_cipher)), global(c0_AES256)));
c0_TLS_RSA_WITH_AES_256_CBC_SHA256.addConstraint(equal(joinRef(join(joinRef(join($this(), c0_cipher)), c0_mode)), global(c0_CBC)));
c0_TLS_RSA_WITH_AES_256_CBC_SHA256.addConstraint(greaterThanEqual(joinRef(joinRef(join($this(), c0_tlsProtocol))), joinRef(global(c0_TLS1_2))));
c0_TLS_RSA_WITH_AES_256_CBC_SHA256.addConstraint(equal(joinRef(join($this(), c0_signature)), global(c0_RSA_Sig)));
c0_TLS_RSA_WITH_AES_256_CBC_SHA256.addConstraint(equal(joinRef(join($this(), c0_keyAgreement)), global(c0_RSA_KeyAgr)));
c0_TLS_RSA_WITH_AES_256_CBC_SHA256.addConstraint(equal(joinRef(join($this(), c0_messageAuth)), global(c0_SHA256)));
c0_TLS_DHE_RSA_WITH_AES_128_GCM_SHA256.extending(c0_CipherSuite);
c0_TLS_DHE_RSA_WITH_AES_128_GCM_SHA256.addConstraint(equal(joinRef(join($this(), c0_cipher)), global(c0_AES128)));
c0_TLS_DHE_RSA_WITH_AES_128_GCM_SHA256.addConstraint(equal(joinRef(join(joinRef(join($this(), c0_cipher)), c0_mode)), global(c0_GCM)));
c0_TLS_DHE_RSA_WITH_AES_128_GCM_SHA256.addConstraint(equal(joinRef(join($this(), c0_signature)), global(c0_RSA_Sig)));
c0_TLS_DHE_RSA_WITH_AES_128_GCM_SHA256.addConstraint(equal(joinRef(join($this(), c0_messageAuth)), global(c0_SHA256)));
c0_TLS_DHE_RSA_WITH_AES_128_GCM_SHA256.addConstraint(equal(joinRef(join($this(), c0_keyAgreement)), global(c0_ECDHE)));
c0_SSL_RSA_WITH_NULL_MD5.extending(c0_CipherSuite);
c0_SSL_RSA_WITH_NULL_MD5.addConstraint(none(join($this(), c0_cipher)));
c0_SSL_RSA_WITH_NULL_MD5.addConstraint(equal(joinRef(join($this(), c0_signature)), global(c0_RSA_Sig)));
c0_SSL_RSA_WITH_NULL_MD5.addConstraint(equal(joinRef(join($this(), c0_messageAuth)), global(c0_MD5)));
c0_SSL_RSA_WITH_NULL_MD5.addConstraint(equal(joinRef(join($this(), c0_keyAgreement)), global(c0_RSA_KeyAgr)));
c0_SSL_RSA_WITH_NULL_MD5.addConstraint(greaterThanEqual(joinRef(joinRef(join($this(), c0_tlsProtocol))), joinRef(global(c0_SSL2))));
c0_SecureCommunication.extending(c0_Task);
c0_SecureCommunication.addConstraint(equal(joinRef(join($this(), c1_description)), constant("\"Communicate over a secure channel\"")));
c0_ciphersuites.refToUnique(c0_CipherSuite);
c0_SecureCommunication.addConstraint(all([decl([suite = local("suite")], join($this(), c0_ciphersuites))], and(greaterThanEqual(joinRef(joinRef(join(joinRef(suite), c0_tlsProtocol))), joinRef(global(c0_TLS1_2))), greaterThan(joinRef(join(joinRef(suite), c1_security)), joinRef(global(c0_Medium))))));
c0_SymmetricEncryption.extending(c0_Task);
c0_SymmetricEncryption.addConstraint(equal(joinRef(join($this(), c1_description)), constant("\"Encrypt data using a secret key\"")));
c1_cipher.refTo(c0_SymmetricBlockCipher);
c0_SecurePassword.extending(c0_Task);
c0_SecurePassword.addConstraint(equal(joinRef(join($this(), c1_description)), constant("\"Represent password in a secure way for storage\"")));
c0_kda.refTo(c0_KeyDerivationAlgorithm);
c0_PasswordBasedEncryption.extending(c0_Task);
c0_PasswordBasedEncryption.addConstraint(equal(joinRef(join($this(), c1_description)), constant("\"Encrypt data using a given password\"")));
c1_kda.refTo(c0_KeyDerivationAlgorithm);
c2_cipher.refTo(c0_SymmetricBlockCipher);
c0_PasswordBasedEncryption.addConstraint(equal(joinRef(join(joinRef(join($this(), c2_cipher)), c0_keySize)), joinRef(join(joinRef(join($this(), c1_kda)), c1_outputSize))));
