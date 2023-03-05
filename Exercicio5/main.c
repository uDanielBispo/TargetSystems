#include <stdio.h>
#include <string.h>

void main(void){
    Char palavra[21], palavraReversa[21];
    
    printf("Digite uma palavra: ");
    gets(palavra); 
    
    for(int i = 0, z = strlen(palavra)-1 ; palavra[i] != '\0'; i++, z--)
        palavraReversa[z] = palavra[i];
        

    printf("A palavra reversa fica: %s", palavraReversa);
}
