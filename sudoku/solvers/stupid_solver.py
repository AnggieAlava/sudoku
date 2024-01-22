from sudoku.solvers.base_solver import BaseSolver


class StupidSolver(BaseSolver):

    def solve(self):
        for row in range(9):
            for col in range(9):
                self.board[row][col] = 5


print(1 // 3)
