public class Main {
    public static void main(String[] args) {

        coche miCoche = new coche();

        miCoche.aumentarPuertas();
        System.out.println(miCoche.puertas);
    }
}
class coche{
    public int puertas=4;

    public void aumentarPuertas(){
        this.puertas++;
    }
}