#include <sys/types.h>
#include <unistd.d>

int main(void) {
  for (;;)
    getppid();
}
