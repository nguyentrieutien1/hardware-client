#include <iostream>

const int MOD = 1000000007;

int powerMod(int a, int b) {
    if (b == 0)
        return 1;

    long long result = powerMod(a, b / 2);
    result = (result * result) % MOD;

    if (b % 2 == 1)
        result = (result * a) % MOD;

    return static_cast<int>(result);
}

int main() {
    int n;
    std::cin >> n;

    for (int i = 0; i < n; ++i) {
        int a, b;
        std::cin >> a >> b;

        int result = powerMod(a, b);
        std::cout << result << std::endl;
    }

    return 0;
}