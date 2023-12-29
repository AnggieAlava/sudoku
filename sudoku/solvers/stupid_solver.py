from sudoku.solvers.base_solver import BaseSolver

class StupidSolver(BaseSolver):

    def solve(self):
        for i in range(9):
            for j in range(9):
                self.board[i][j] = 5