public class Main {
    public static void main(String[] args) {
       int numeroWhile = 0;
       int numeroIf = -2;
       int estacion = 5;
        //numeroPositivo(numeroIf);
        //bucleWhile(numeroWhile);
       // bucleDoWhile(numeroWhile);
        //bucleFor();
        switchCase(estacion);
    }

    public static void numeroPositivo( int numeroIf) {

        if (numeroIf < 0) {
            System.out.println("El numero es negativo");

        } else if (numeroIf == 0) {
            System.out.println("El numero es 0");
        } else {
            System.out.println("El numero es positivo");
        }

    }

    public static void bucleWhile(int numeroWhile){

        while (numeroWhile <3){
            numeroWhile++;
            System.out.println(numeroWhile);
        }

    }

    public static void bucleDoWhile(int numeroWhile){

        do {
            numeroWhile++;
        }
        while (numeroWhile < 3);{
            System.out.println(numeroWhile);
        }
    }
    public static void bucleFor() {
            for (int numeroFor=0; numeroFor <=3; numeroFor++){
                System.out.println(numeroFor);
            }

    }

    public static  void switchCase( int estacion){

        switch (estacion){

            case 1 :
                System.out.println("primavera");
                break;
            case 2:
                System.out.println("verano");
                break;
            case 3:
                System.out.println("otoño");
                break;
            case 4:
                System.out.println("otoño");
                break;
            default:
                System.out.println("Ingrese un valor del 1 al 4");
        }


    }

}