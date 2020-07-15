#include <sys/types.h>
#include <sys/wait.h>
#include <time.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <err.h>

#define NLOOP_FOR_ESTIMATION 1000000000UL
#define NLOOP_FOR_MSEC 1000000UL
#define NLOOP_FOR_SEC 1000000000UL

static inline long diff_nsec(struct timespec before, struct timespec after)
{
  return ((after.tv_sec * NSECS_PER_SEC + after.tv_nsec) - (before.tv_sec * NSECS_PER_SEC + before.tv_nsec));
}

static inline long loops_per_msec()
{
  struct timespec before, after;
  clock_gettime(CLOCK_MONOTONIC, &before);

  unsigned long i;
  for (i = 0; i < NLOOP_FOR_ESTIMATION; i++)
    ;

  clock_gettime(CLOCK_MONOTONIC, &after);

  int ret;
  return NLOOP_FOR_ESTIMATION * NSECS_PER_MSEC / diff_nsec(before, after);
}

static inline void load(unsigned long nloop)
{}
