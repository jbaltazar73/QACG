# language: es

@login
Característica: Flujo registro de cuenta

Antecedentes:
    Dado Que estoy en la página de login de ERP
    Cuando Ingreso mis credenciales válidas en ERP "ggutierrez@mnyl.com.mx" y "Prueb@22O"
    Y Hago click en el botón de inicio de sesión de ERP
    Entonces Se muestra la página principal ERP
    Y doy click en el botón "Navegador" de la página "Home"

Escenario: Flujo Registro de cuenta
        Y doy click en el botón "Herramientas" de la página "Home"
        Y doy click en el botón "InformesYAnalisis" de la página "Home"
        Y doy click en el botón "ExaminarCatalogo" de la página "InformesYAnalisis"
        Y doy click en el botón "PanelesDeControl" de la página "Catalogo"
        Y doy click en el botón "Personalizar" de la página "Catalogo"
        Y doy click en la opción "RegistrodeCuentas" en el campo "Personalizar" de la página "Catalogo"
        Y doy click en el botón "Registro de cuentas v2" de la página "RegistroDeCuentas"
        Y doy click en el botón "Configuracion" de la página "RegistroDeCuentas"
        Y doy click en el botón "Programar" de la página "RegistroDeCuentas"
        Y doy click en el campo "ledger" de la página "RegistroDeCuentas" 
        Y deselecciono la opción "Todo" en el campo "ledger" de la página "RegistroDeCuentas"
        Y selecciono la opción "L_SMNYL" en el campo "ledger" de la página "RegistroDeCuentas"
        Y doy click en icono flecha abajo de campo "period_from" de la página "RegistroDeCuentas"
        Y doy click en icono "Buscar" en el campo "PeriodFrom" de la página "RegistroDeCuentas"      
        E ingreso "Nov-23" en el campo "Nombre" de la página "RegistroDeCuentas" 

#        Y selecciono la opción "1101" en el campo "segment_From" de la página "RegistroDeCuentas"
#        Y espero "10" segundos en v
#        Y selecciono la opción "1501" en el campo "segment_To" de la página "RegistroDeCuentas"
#
#        Y espero "10" segundos en v
#
         

     #   Y doy click en el botón "Aceptar" de la página "RegistroDeCuentas"
     #   Y selecciono la opción "Buscar" en el campo "PeriodTo" de la página "RegistroDeCuentas" 
     #   E ingreso "Nov-23" en el campo "Nombre" de la página "RegistroDeCuentas"
     #   Y doy click en el botón "Buscar" de la página "RegistroDeCuentas"
     #   Y selecciono la opción "Nov-23" en el campo "Valor" de la página "RegistroDeCuentas"
     #   Y doy click en el botón "Aceptar" de la página "RegistroDeCuentas"


     #   E ingreso "2023/11/01" en el campo "DiaInicio" de la página "RegistroDeCuentas"
     #   E ingreso "2023/11/30" en el campo "DiaFin" de la página "RegistroDeCuentas"
     #   Y doy click en el botón "Enviar" de la página "RegistroDeCuentas"
     #   E ingreso "1101" en el campo "NombreTrabajoInforme" de la página "RegistroDeCuentas"
     #   Y doy click en el botón "Aceptar" de la página "RegistroDeCuentas"
     #   Y doy click en el botón "OK" de la página "RegistroDeCuentas"