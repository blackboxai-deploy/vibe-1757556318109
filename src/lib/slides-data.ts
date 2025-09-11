export interface SlideData {
  id: number;
  type: 'title' | 'content' | 'hook' | 'objectives';
  title: string;
  subtitle?: string;
  author?: string;
  institution?: string;
  date?: string;
  content?: string[];
  code?: string;
  diagram?: {
    title: string;
    elements: string[];
  };
  comparison?: {
    before: {
      title: string;
      points: string[];
    };
    after: {
      title: string;
      points: string[];
    };
  };
  exercise?: {
    title: string;
    description: string;
    code?: string;
    solution?: string;
  };
  objectives?: string[];
  question?: string;
  context?: string;
  speakerNotes: string;
}

export const slides: SlideData[] = [
  // Slide 1 - Portada
  {
    id: 1,
    type: 'title',
    title: 'Paquetes, Clases y Métodos en Java',
    subtitle: 'Fundamentos de Programación Orientada a Objetos',
    author: 'Curso de Programación Avanzada',
    institution: 'Universidad - Facultad de Ingeniería',
    date: 'Semestre 2024',
    speakerNotes: 'Bienvenidos estudiantes. Hoy exploraremos tres conceptos fundamentales que les permitirán organizar y estructurar código Java de manera profesional. Esta presentación está diseñada específicamente para estudiantes universitarios que buscan dominar la programación orientada a objetos. Al finalizar, tendrán las herramientas necesarias para crear aplicaciones Java bien estructuradas y mantenibles.'
  },

  // Slide 2 - Gancho inicial
  {
    id: 2,
    type: 'hook',
    title: '¿Sabían que...?',
    question: 'Una aplicación Java promedio contiene más de 100 clases organizadas en diferentes paquetes, y cada clase puede tener decenas de métodos. Sin una estructura adecuada, mantener código se vuelve imposible.',
    context: 'Imaginen intentar encontrar un libro específico en una biblioteca sin secciones, sin clasificación, donde todos los libros están mezclados aleatoriamente. Eso es exactamente lo que sucede con código Java mal organizado.',
    speakerNotes: 'Comenzemos con una reflexión que conecte con su experiencia académica. Como estudiantes, organizan sus materias por facultades, sus apuntes por temas, sus archivos por carpetas. En Java, los paquetes, clases y métodos cumplen esta misma función organizativa, pero en el mundo del software. Esta organización no es solo cosmética - determina si su futuro código será mantenible y escalable en proyectos reales.'
  },

  // Slide 3 - Objetivos
  {
    id: 3,
    type: 'objectives',
    title: 'Objetivos de Aprendizaje',
    objectives: [
      'Comprender la importancia de los paquetes como sistema de organización modular',
      'Dominar la creación y uso de clases como plantillas de objetos',
      'Implementar métodos efectivos con parámetros y valores de retorno',
      'Aplicar principios de encapsulación y modularidad en proyectos reales',
      'Desarrollar un proyecto integrador que demuestre estos conceptos'
    ],
    speakerNotes: 'Estos objetivos están alineados con competencias profesionales reales. Al dominar estos conceptos, no solo aprobarán la materia, sino que desarrollarán habilidades demandadas en la industria del software. Cada objetivo se evaluará mediante ejercicios prácticos que simularán desafíos reales de programación. Mantengan estos objetivos presentes durante toda la presentación.'
  },

  // Slide 4 - Idea Central
  {
    id: 4,
    type: 'content',
    title: 'Idea Central',
    content: [
      '💡 "Los paquetes organizan, las clases definen, los métodos ejecutan"',
      'Esta tríada forma la base arquitectónica de toda aplicación Java profesional',
      'Cada elemento tiene un propósito específico y complementario',
      'Su correcta implementación determina la calidad del software'
    ],
    speakerNotes: 'Esta frase resume toda la presentación. Memorícenla porque será su guía conceptual. Los paquetes son como las facultades de su universidad - agrupan elementos relacionados. Las clases son como los planes de estudio - definen qué contendrá cada elemento. Los métodos son como las clases específicas - donde ocurre el aprendizaje real. Durante su carrera profesional, esta organización jerárquica será fundamental.'
  },

  // Slide 5 - Contexto y Relevancia
  {
    id: 5,
    type: 'content',
    title: 'Contexto: ¿Por qué es crucial en el mundo profesional?',
    content: [
      '🏢 Proyectos empresariales manejan millones de líneas de código',
      '👥 Equipos de desarrollo trabajan simultáneamente en el mismo proyecto',
      '⚡ Mantenimiento y actualizaciones deben ser rápidas y seguras',
      '🎯 Reutilización de código reduce tiempo de desarrollo en 60%',
      '📈 Aplicaciones escalables requieren arquitectura modular desde el inicio'
    ],
    speakerNotes: 'Contextualicemos por qué estos conceptos trascienden el ámbito académico. En su futuro laboral, trabajarán en proyectos donde la desorganización cuesta literalmente millones de dólares. Empresas como Google, Netflix o cualquier startup exitosa dependen de esta organización. Un código mal estructurado puede hacer que un proyecto de 6 meses se extienda a 2 años. Por eso, dominar estos fundamentos ahora es una inversión en su futuro profesional.'
  },

  // Slide 6 - Conceptos básicos: Paquetes
  {
    id: 6,
    type: 'content',
    title: 'Conceptos Básicos: ¿Qué son los Paquetes?',
    content: [
      '📂 Contenedores lógicos que agrupan clases relacionadas',
      '🏗️ Equivalentes a carpetas en el sistema de archivos',
      '🎯 Evitan conflictos de nombres entre clases',
      '🔒 Proporcionan control de acceso y encapsulación',
      '📝 Se declaran al inicio de cada archivo Java'
    ],
    code: `// Declaración de paquete
package com.universidad.estudiantes;

// Importación de otros paquetes
import java.util.ArrayList;
import com.universidad.profesores.Profesor;

public class Estudiante {
    // Contenido de la clase...
}`,
    speakerNotes: 'Los paquetes son su primera herramienta de organización. Piensen en su estructura de carpetas académicas: tienen una carpeta por materia, dentro subcarpetas por temas. Los paquetes funcionan igual. La convención de nombres (com.empresa.modulo) refleja una jerarquía organizacional real. Cuando trabajen en empresas, esta estructura les permitirá localizar y modificar código específico sin afectar otras partes del sistema.'
  },

  // Slide 7 - Conceptos básicos: Clases
  {
    id: 7,
    type: 'content',
    title: 'Conceptos Básicos: ¿Qué son las Clases?',
    content: [
      '🏛️ Plantillas o moldes para crear objetos',
      '📋 Definen atributos (características) y métodos (comportamientos)',
      '🔧 Encapsulan datos y funcionalidad relacionada',
      '♻️ Permiten reutilización y mantenimiento eficiente',
      '🎭 Representan entidades del mundo real en código'
    ],
    code: `public class Estudiante {
    // Atributos (características)
    private String nombre;
    private int edad;
    private String carrera;
    
    // Constructor
    public Estudiante(String nombre, int edad, String carrera) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }
    
    // Métodos (comportamientos)
    public void estudiar() {
        System.out.println(nombre + " está estudiando " + carrera);
    }
}`,
    speakerNotes: 'Las clases son el corazón de Java. Piensen en una clase como el formulario de inscripción universitaria - define qué información necesita cada estudiante (atributos) y qué puede hacer (métodos). Una vez definida la clase Estudiante, pueden crear miles de objetos estudiante diferentes, cada uno con sus datos específicos pero compartiendo la misma estructura. Esto es programación orientada a objetos en acción.'
  },

  // Slide 8 - Conceptos básicos: Métodos
  {
    id: 8,
    type: 'content',
    title: 'Conceptos Básicos: ¿Qué son los Métodos?',
    content: [
      '⚙️ Bloques de código que realizan tareas específicas',
      '📨 Pueden recibir parámetros (entrada) y devolver valores (salida)',
      '🔄 Promueven reutilización y evitan repetición de código',
      '🎯 Implementan la funcionalidad específica de las clases',
      '🔍 Facilitan testing y debugging al aislar funcionalidades'
    ],
    code: `public class CalculadoraAcademica {
    
    // Método que recibe parámetros y devuelve un valor
    public double calcularPromedio(double[] notas) {
        double suma = 0;
        for (double nota : notas) {
            suma += nota;
        }
        return suma / notas.length;
    }
    
    // Método que no devuelve valor (void)
    public void mostrarResultado(String estudiante, double promedio) {
        System.out.println("El promedio de " + estudiante + " es: " + promedio);
    }
}`,
    speakerNotes: 'Los métodos son las acciones que pueden realizar los objetos. Como las funciones matemáticas que estudian, reciben entrada, procesan información y producen salida. En el ejemplo académico, calcularPromedio toma un arreglo de notas y devuelve el promedio - una tarea específica y reutilizable. Cada método debe tener una responsabilidad clara, lo que facilita el mantenimiento y testing del código.'
  },

  // Slide 9 - Conceptos intermedios: Ejemplo práctico universidad
  {
    id: 9,
    type: 'content',
    title: 'Aplicación Práctica: Sistema Universitario',
    content: [
      '🎓 Modelemos un sistema de gestión universitaria completo',
      '🏗️ Estructura de paquetes por funcionalidad',
      '👤 Clases que representen entidades reales',
      '🔗 Métodos que implementen operaciones académicas'
    ],
    code: `// Estructura de paquetes
com.universidad.academico
├── estudiantes/
│   └── Estudiante.java
├── profesores/
│   └── Profesor.java
├── materias/
│   └── Materia.java
└── evaluaciones/
    └── Calificacion.java

// Ejemplo de interacción entre clases
public class SistemaAcademico {
    public void inscribirEstudiante(Estudiante estudiante, Materia materia) {
        if (estudiante.cumpleRequisitos(materia)) {
            materia.agregarEstudiante(estudiante);
            estudiante.inscribirMateria(materia);
        }
    }
}`,
    speakerNotes: 'Ahora aplicamos los conceptos a un escenario familiar - su propia universidad. Esta estructura refleja la organización real de una institución académica. Cada paquete agrupa clases relacionadas, cada clase modela una entidad real, y los métodos implementan procesos académicos reales como inscripciones. Noten cómo la organización lógica del código refleja la organización lógica de la institución.'
  },

  // Slide 10 - Conceptos intermedios: Encapsulación
  {
    id: 10,
    type: 'content',
    title: 'Principio Clave: Encapsulación',
    content: [
      '🔒 Protección de datos mediante modificadores de acceso',
      '✅ public: accesible desde cualquier lugar',
      '🏠 private: accesible solo dentro de la misma clase',
      '📦 protected: accesible dentro del paquete y subclases',
      '🎯 Garantiza integridad y control de datos'
    ],
    code: `public class CuentaEstudiante {
    private double saldo;           // Solo la clase puede modificarlo
    private String numeroCuenta;    // Información sensible protegida
    
    // Métodos públicos para acceso controlado
    public double getSaldo() {
        return saldo;
    }
    
    public boolean retirar(double cantidad) {
        if (cantidad > 0 && cantidad <= saldo) {
            saldo -= cantidad;
            return true;
        }
        return false; // Operación no válida
    }
    
    public void depositar(double cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
        }
    }
}`,
    speakerNotes: 'La encapsulación es como la privacidad en sus cuentas bancarias estudiantiles. No cualquiera puede acceder directamente a su saldo, pero pueden usar cajeros automáticos (métodos públicos) para operaciones controladas. En programación, esto evita que otras partes del código modifiquen datos de manera incorrecta. Es un principio de seguridad y diseño que seguirán aplicando en proyectos profesionales complejos.'
  },

  // Slide 11 - Conceptos intermedios: Herencia
  {
    id: 11,
    type: 'content',
    title: 'Conceptos Intermedios: Herencia y Polimorfismo',
    content: [
      '👨‍👩‍👧‍👦 Herencia: clases hijas heredan características de clases padre',
      '🎭 Polimorfismo: diferentes implementaciones de la misma operación',
      '♻️ Reutilización eficiente de código común',
      '🔄 Flexibilidad para extensiones y modificaciones'
    ],
    code: `// Clase padre
public abstract class PersonaUniversitaria {
    protected String nombre;
    protected int id;
    
    public abstract void mostrarRol();
}

// Clases hijas
public class Estudiante extends PersonaUniversitaria {
    private String carrera;
    
    @Override
    public void mostrarRol() {
        System.out.println(nombre + " es estudiante de " + carrera);
    }
}

public class Profesor extends PersonaUniversitaria {
    private String departamento;
    
    @Override
    public void mostrarRol() {
        System.out.println(nombre + " es profesor del " + departamento);
    }
}`,
    speakerNotes: 'La herencia refleja relaciones naturales - tanto estudiantes como profesores son personas universitarias, pero con roles específicos. Esto evita duplicar código común (nombre, id) mientras permite especialización. El polimorfismo significa que el método mostrarRol se comporta diferente según el tipo de objeto. Esta flexibilidad es crucial en sistemas grandes donde necesitan manejar diferentes tipos de datos con interfaces comunes.'
  },

  // Slide 12 - Conceptos avanzados: Sobrecarga
  {
    id: 12,
    type: 'content',
    title: 'Conceptos Avanzados: Sobrecarga de Métodos',
    content: [
      '🔄 Múltiples versiones de un método con diferentes parámetros',
      '🎯 Flexibilidad en la forma de invocar funcionalidades',
      '📝 Facilita el uso de APIs más intuitivas',
      '⚡ Optimización según el tipo de datos recibidos'
    ],
    code: `public class NotificacionAcademica {
    
    // Notificación simple
    public void enviarNotificacion(String mensaje) {
        System.out.println("Mensaje: " + mensaje);
    }
    
    // Notificación con destinatario específico
    public void enviarNotificacion(String mensaje, String destinatario) {
        System.out.println("Para " + destinatario + ": " + mensaje);
    }
    
    // Notificación con prioridad
    public void enviarNotificacion(String mensaje, String destinatario, int prioridad) {
        String nivel = (prioridad == 1) ? "URGENTE" : "NORMAL";
        System.out.println("[" + nivel + "] Para " + destinatario + ": " + mensaje);
    }
    
    // Notificación masiva
    public void enviarNotificacion(String mensaje, String[] destinatarios) {
        for (String dest : destinatarios) {
            enviarNotificacion(mensaje, dest);
        }
    }
}`,
    speakerNotes: 'La sobrecarga permite que un mismo método se adapte a diferentes situaciones, como enviar notificaciones académicas. Pueden enviar un mensaje simple, dirigido a alguien específico, con prioridad, o masivo. Java selecciona automáticamente la versión correcta según los parámetros que proporcionen. Esto hace que su código sea más intuitivo - no necesitan recordar nombres diferentes para operaciones similares.'
  },

  // Slide 13 - Conceptos avanzados: Métodos estáticos
  {
    id: 13,
    type: 'content',
    title: 'Conceptos Avanzados: Métodos y Variables Estáticos',
    content: [
      '🏛️ Pertenecen a la clase, no a instancias específicas',
      '🌐 Accesibles sin crear objetos de la clase',
      '📊 Útiles para utilidades y funciones comunes',
      '💾 Variables estáticas compartidas entre todas las instancias'
    ],
    code: `public class UtilidadesAcademicas {
    
    // Variable estática - compartida por todas las instancias
    private static int contadorEstudiantes = 0;
    
    // Método estático - no requiere instancia
    public static double convertirNotaAPromedio(int nota, int notaMaxima) {
        return (double) nota / notaMaxima * 10.0;
    }
    
    // Método estático para generar IDs únicos
    public static String generarIdEstudiante() {
        contadorEstudiantes++;
        return "EST" + String.format("%06d", contadorEstudiantes);
    }
    
    // Método estático para validaciones
    public static boolean esNotaValida(double nota) {
        return nota >= 0.0 && nota <= 10.0;
    }
}

// Uso sin crear objetos
double promedio = UtilidadesAcademicas.convertirNotaAPromedio(85, 100);
String nuevoId = UtilidadesAcademicas.generarIdEstudiante();`,
    speakerNotes: 'Los métodos estáticos son como servicios universitarios centralizados - biblioteca, registro académico - que todos pueden usar sin pertenecer a una carrera específica. No necesitan crear un objeto para convertir notas o generar IDs. La variable estática contadorEstudiantes mantiene el conteo global sin importar cuántos objetos de la clase existan. Esto es útil para funciones utilitarias que toda la aplicación necesita.'
  },

  // Slide 14 - Conceptos avanzados: Interfaces
  {
    id: 14,
    type: 'content',
    title: 'Conceptos Avanzados: Interfaces y Contratos',
    content: [
      '📋 Contratos que definen qué métodos debe implementar una clase',
      '🤝 Garantizan consistencia entre diferentes implementaciones',
      '🔌 Permiten intercambiar componentes fácilmente',
      '🎯 Facilitan testing y desarrollo modular'
    ],
    code: `// Interface define el contrato
public interface EvaluacionAcademica {
    double calcularNota();
    boolean esAprobado();
    String obtenerRetroalimentacion();
}

// Implementaciones específicas
public class Examen implements EvaluacionAcademica {
    private double puntuacion;
    
    @Override
    public double calcularNota() {
        return puntuacion * 10.0 / 100.0;
    }
    
    @Override
    public boolean esAprobado() {
        return calcularNota() >= 6.0;
    }
    
    @Override
    public String obtenerRetroalimentacion() {
        return esAprobado() ? "Excelente trabajo" : "Necesita mejorar";
    }
}

public class Proyecto implements EvaluacionAcademica {
    // Implementación diferente pero mismo contrato...
}`,
    speakerNotes: 'Las interfaces son como los requisitos de graduación - todas las carreras deben cumplir ciertos estándares, pero cada una los implementa diferente. En este ejemplo, tanto Examen como Proyecto deben calcular notas, determinar aprobación y dar retroalimentación, pero la lógica interna varía. Esto permite que su sistema trate diferentes tipos de evaluación de manera uniforme, facilitando mantenimiento y extensión.'
  },

  // Slide 15 - Comparación Antes/Después
  {
    id: 15,
    type: 'content',
    title: 'Comparación: Antes vs. Después de aplicar OOP',
    comparison: {
      before: {
        title: 'Sin Organización OOP',
        points: [
          'Todo el código en un archivo gigante',
          'Variables globales accesibles desde cualquier lugar',
          'Funciones repetitivas y difíciles de mantener',
          'Imposible trabajar en equipo eficientemente',
          'Errores en cadena al modificar código',
          'Testing individual de componentes imposible'
        ]
      },
      after: {
        title: 'Con Paquetes, Clases y Métodos',
        points: [
          'Código organizado en módulos lógicos',
          'Datos protegidos con encapsulación',
          'Funcionalidad reutilizable y mantenible',
          'Desarrollo colaborativo sin conflictos',
          'Cambios aislados y controlados',
          'Testing unitario de cada componente'
        ]
      }
    },
    speakerNotes: 'Esta comparación muestra el impacto real de aplicar los conceptos correctamente. Sin OOP, mantener código se vuelve una pesadilla - cambiar algo puede romper todo el sistema. Con OOP, cada componente tiene responsabilidades claras, pueden trabajar independientemente en diferentes partes, y los errores se aíslan. En proyectos reales, esta diferencia determina si un proyecto es exitoso o fracasa. La organización inicial requiere más tiempo, pero ahorra meses de trabajo a largo plazo.'
  },

  // Slide 16 - Ejercicio Práctico 1
  {
    id: 16,
    type: 'content',
    title: 'Ejercicio Práctico 1: Básico',
    exercise: {
      title: 'Crear un Sistema de Biblioteca Universitaria',
      description: 'Implementa clases para Libro, Usuario y Biblioteca con funcionalidades básicas de préstamo.',
      code: `// Tu tarea: completar la implementación
public class Libro {
    private String titulo;
    private String autor;
    private boolean disponible;
    
    // TODO: Implementar constructor y métodos
}

public class Usuario {
    private String nombre;
    private int id;
    
    // TODO: Implementar métodos para préstamo
}

public class Biblioteca {
    // TODO: Gestionar colección de libros y usuarios
}`
    },
    content: [
      '📚 Crear clase Libro con atributos: título, autor, disponible',
      '👤 Crear clase Usuario con: nombre, id, lista de libros prestados',
      '🏛️ Crear clase Biblioteca que gestione préstamos y devoluciones',
      '⚙️ Implementar métodos: prestarLibro(), devolverLibro(), buscarLibro()'
    ],
    speakerNotes: 'Este ejercicio básico consolida los conceptos fundamentales. Los estudiantes deben pensar en la estructura de datos, relaciones entre clases, y métodos necesarios. Es importante que identifiquen qué información debe ser private, qué métodos public, y cómo las clases interactúan. Daré 10 minutos para que piensen la estructura antes de mostrar la solución. Enfoquen en la lógica del negocio, no en detalles de implementación complejos.'
  },

  // Slide 17 - Ejercicio Práctico 2
  {
    id: 17,
    type: 'content',
    title: 'Ejercicio Práctico 2: Intermedio',
    exercise: {
      title: 'Sistema de Calificaciones con Herencia',
      description: 'Implementa jerarquía de evaluaciones con diferentes tipos y cálculos.',
      code: `// Estructura base proporcionada
public abstract class Evaluacion {
    protected String nombre;
    protected double puntaje;
    
    public abstract double calcularNotaFinal();
    public abstract String obtenerTipo();
}

// TODO: Implementar ExamenFinal, Proyecto, Tarea
// Cada uno con diferentes criterios de calificación

public class CalculadoraPromedio {
    public static double promediarEvaluaciones(Evaluacion[] evaluaciones) {
        // TODO: Implementar cálculo de promedio ponderado
    }
}`
    },
    content: [
      '🎯 Usar herencia para diferentes tipos de evaluación',
      '📊 ExamenFinal: nota directa con peso 40%',
      '💻 Proyecto: criterios múltiples con peso 35%', 
      '📝 Tarea: promedio simple con peso 25%',
      '🧮 Implementar calculadora de promedio ponderado'
    ],
    speakerNotes: 'Este ejercicio intermedio introduce herencia y polimorfismo. Los estudiantes deben pensar en qué es común a todas las evaluaciones (clase padre) y qué es específico de cada tipo (clases hijas). El desafío está en el cálculo ponderado - cada tipo de evaluación contribuye diferente al promedio final. Es un ejemplo realista de cómo modelar sistemas académicos reales que usan en su universidad.'
  },

  // Slide 18 - Caso de Estudio Real
  {
    id: 18,
    type: 'content',
    title: 'Caso de Estudio: Sistema de Gestión Académica Completo',
    content: [
      '🏛️ Análisis de arquitectura de sistema universitario real',
      '📦 Organización por módulos: académico, administrativo, financiero',
      '🔗 Integración entre diferentes subsistemas',
      '📈 Escalabilidad para 50,000+ estudiantes',
      '🔒 Seguridad y control de acceso por roles'
    ],
    code: `// Arquitectura del sistema real
com.universidad.core/
├── academico/
│   ├── estudiantes/     // Gestión de estudiantes
│   ├── profesores/      // Gestión de profesores  
│   ├── materias/        // Catálogo académico
│   └── evaluaciones/    // Sistema de calificaciones
├── administrativo/
│   ├── inscripciones/   // Proceso de matrícula
│   ├── horarios/        // Gestión de horarios
│   └── aulas/           // Recursos físicos
├── financiero/
│   ├── pagos/           // Gestión de pagos
│   ├── becas/           // Programa de becas
│   └── facturacion/     // Emisión de recibos
└── seguridad/
    ├── usuarios/        // Autenticación
    ├── roles/           // Control de acceso
    └── auditoria/       // Trazabilidad de operaciones`,
    speakerNotes: 'Este caso muestra cómo los conceptos que hemos visto se aplican en sistemas reales. La universidad probablemente usa un sistema similar a este para gestionar su información académica. Noten cómo la organización en paquetes refleja la estructura organizacional real, cómo cada módulo tiene responsabilidades específicas, y cómo la seguridad es transversal. En sus carreras profesionales, trabajarán en sistemas de esta complejidad.'
  },

  // Slide 19 - Resumen de Puntos Clave
  {
    id: 19,
    type: 'content',
    title: 'Puntos Clave para Recordar',
    content: [
      '1️⃣ ORGANIZACIÓN: Los paquetes estructuran el código como carpetas organizan archivos',
      '2️⃣ ENCAPSULACIÓN: Las clases protegen datos y exponen funcionalidad controlada',
      '3️⃣ REUTILIZACIÓN: Los métodos eliminan código duplicado y facilitan mantenimiento',
      '4️⃣ ESCALABILIDAD: La estructura OOP permite crecimiento sostenible del software',
      '5️⃣ COLABORACIÓN: El código bien organizado facilita el trabajo en equipo'
    ],
    speakerNotes: 'Estos cinco puntos resumen todo lo que hemos visto. Organización para mantener orden, encapsulación para proteger datos, reutilización para eficiencia, escalabilidad para crecimiento, y colaboración para trabajo profesional. Memoricen estos principios porque los aplicarán en cada proyecto de programación. Son la diferencia entre código amateur y código profesional. En sus exámenes y proyectos futuros, evalúen su trabajo contra estos criterios.'
  },

  // Slide 20 - Cierre y Reflexión
  {
    id: 20,
    type: 'content',
    title: 'Reflexión Final y Próximos Pasos',
    content: [
      '🎯 "El código que escriban hoy será el sistema que alguien mantendrá mañana"',
      '📚 Continúen explorando: patrones de diseño, frameworks, arquitecturas',
      '💼 Apliquen estos conceptos en proyectos personales y académicos',
      '🤝 Colaboren en código abierto para practicar en equipos reales',
      '🚀 Prepárense para desafíos profesionales con bases sólidas'
    ],
    speakerNotes: 'Concluimos con una reflexión sobre responsabilidad profesional. Como futuros desarrolladores, el código que escriban impactará a usuarios reales, empresas reales, y otros desarrolladores. Dominar estos fundamentos es su responsabilidad profesional. Los animo a practicar creando proyectos personales, contribuyendo a proyectos open source, y siempre pensando en la persona que leerá su código en el futuro. La programación orientada a objetos es una disciplina, no solo una técnica.'
  }
];

// Soluciones de ejercicios para referencia del presentador
export const exerciseSolutions = {
  ejercicio1: {
    libro: `public class Libro {
    private String titulo;
    private String autor;
    private String isbn;
    private boolean disponible;
    
    public Libro(String titulo, String autor, String isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = true;
    }
    
    public boolean estaDisponible() {
        return disponible;
    }
    
    public void prestar() {
        disponible = false;
    }
    
    public void devolver() {
        disponible = true;
    }
    
    // Getters y setters...
}`,
    usuario: `public class Usuario {
    private String nombre;
    private int id;
    private ArrayList<Libro> librosPrestados;
    
    public Usuario(String nombre, int id) {
        this.nombre = nombre;
        this.id = id;
        this.librosPrestados = new ArrayList<>();
    }
    
    public boolean puedePrestar() {
        return librosPrestados.size() < 3; // Máximo 3 libros
    }
    
    public void agregarLibro(Libro libro) {
        librosPrestados.add(libro);
    }
    
    public void devolverLibro(Libro libro) {
        librosPrestados.remove(libro);
    }
}`,
    biblioteca: `public class Biblioteca {
    private ArrayList<Libro> catalogoLibros;
    private ArrayList<Usuario> usuarios;
    
    public boolean prestarLibro(String isbn, int idUsuario) {
        Libro libro = buscarLibro(isbn);
        Usuario usuario = buscarUsuario(idUsuario);
        
        if (libro != null && usuario != null && 
            libro.estaDisponible() && usuario.puedePrestar()) {
            libro.prestar();
            usuario.agregarLibro(libro);
            return true;
        }
        return false;
    }
}`
  },
  ejercicio2: {
    examen: `public class ExamenFinal extends Evaluacion {
    public ExamenFinal(String nombre, double puntaje) {
        super(nombre, puntaje);
    }
    
    @Override
    public double calcularNotaFinal() {
        return puntaje;
    }
    
    @Override
    public String obtenerTipo() {
        return "Examen Final";
    }
    
    public double getPeso() {
        return 0.40; // 40%
    }
}`,
    proyecto: `public class Proyecto extends Evaluacion {
    private double creatividad;
    private double implementacion;
    private double presentacion;
    
    @Override
    public double calcularNotaFinal() {
        return (creatividad + implementacion + presentacion) / 3.0;
    }
    
    public double getPeso() {
        return 0.35; // 35%
    }
}`
  }
};