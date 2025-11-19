select * from employees
order by hire_date desc
limit 10;

select emp_no, count(salary) 
from salaries
group by emp_no
having count(salary) >= 3;

select emp_no, count(title) 
from titles
group by emp_no
having count(title) >= 2;

select dep.dept_name, avg(salary)
from departments as dep
join salaries
join dept_emp as dem
group by dep.dept_name;
