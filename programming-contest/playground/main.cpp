#include<iostream>
using namespace std;

int main()
{
    int a;
    cin >> a;

    int b;
    cin >> b;

    string result = a * b % 2 == 0 ? "Even" : "Odd";

    cout << result << endl;
    return 0;
}
