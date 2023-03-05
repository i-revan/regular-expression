namespace RegEx
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] employees = new string[0];
            bool flag = true;
            int increment = 0;
            do {
                Console.WriteLine("Enter new employee: ");
                string employee = Console.ReadLine();
                Array.Resize(ref employees, employees.Length+1);
                employees[increment] = employee;
                increment++;
                Console.WriteLine("Do you want to continue? ");
                string answer = Console.ReadLine();
                if (answer.ToUpper() == "YES")
                {
                    continue;
                }
                else
                {
                    flag = false;
                }
            } while (flag);
            for(int i = 0; i < employees.Length; i++) {
                Console.Write(employees[i] + " ");
            }
        }
    }
}