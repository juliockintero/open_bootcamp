public class Main {
    public static void main(String[] args) {

        Cliente cliente = new Cliente();
        cliente.setEdad(35);
        cliente.setNombre("Julio Cesar");
        cliente.setTelefono("3174974151");
        cliente.setCredito(1250);

        System.out.println("Cliente: "+ cliente.getNombre()+ " Edad: " + cliente.getEdad() + " Teléfono: " + cliente.getTelefono()+" Credito: "
        + cliente.getCredito()+" Euros");

        Trabajador trabajador = new Trabajador();
        trabajador.setEdad(45);
        trabajador.setNombre("Andres Perez");
        trabajador.setTelefono("3202345698");
        trabajador.setSalario(500);
        System.out.println("Trabajador: "+ trabajador.getNombre()+ " Edad: " + trabajador.getEdad() + " Teléfono: " + trabajador.getTelefono()+" Salario: "
                + trabajador.getSalario()+" Euros");
    }
}
class Persona{

    int edad;
    String nombre;
    String telefono;

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}

class Cliente extends Persona{

    private  double credito;

    public double getCredito() {
        return credito;
    }

    public void setCredito(double credito) {
        this.credito = credito;
    }
}

class Trabajador extends Persona{

    private double salario;

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }
}