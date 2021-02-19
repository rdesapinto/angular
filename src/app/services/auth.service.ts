export class AuthService {

    isAuth = false;

    //On simule un appel http
    signIn() {
        return new Promise(
          (resolve, reject) => {
            setTimeout(
              () => {
                this.isAuth = true;
                resolve(true);
              }, 2000
            );
          }
        )
    }

    signOut() {
        this.isAuth = false;
    }
} 