package klu.modal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import klu.repository.UserRepository;

@Service
public class Usermanger {

    @Autowired
    UserRepository UR;
    
    @Autowired
    EmailManager EM;
    
    @Autowired
    JwtManager JWT;

    // SIGNUP - Insert new user
    public String insertData(User U) {
        if (U.getEmailid() == null || U.getEmailid().trim().isEmpty()) {
            return "400::Email cannot be empty";
        }

        if (UR.validateEmail(U.getEmailid()) > 0) {
            return "401::Email ID already exists!";
        }

        UR.save(U);  // ✅ Save only after email is present
        return "200::User has been Registered";
    }

    // PASSWORD RECOVERY
    public String getPassword(String emailid) {
        if (!UR.existsById(emailid)) {
            return "404::Email Not Found";
        }
        User U = UR.findById(emailid).get();
        String subject = "Password Recovery";
        String message = "Dear " + U.getFullname() + "\n\nYour Password is " + U.getPassword();
        return EM.sendEmail(emailid, subject, message);
    }

    // SIGNIN
    public String signIn(String username, String password) {
        if (UR.validateCredentials(username, password) == 0)
            return "404::Invalid Credentials";

        return "200::" + JWT.generateJWT(username);
    }

    // Get fullname from token
    public String getFullName(String token) {
        String emailid = JWT.validateJWT(token);

        if (emailid.equals("401"))
            return "401::Invalid Token";

        User U = UR.findById(emailid).orElse(null);
        if (U == null)
            return "404::User Not Found";

        return "200::" + U.getFullname();
        }
}
