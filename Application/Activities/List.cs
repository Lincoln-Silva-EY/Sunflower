using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>>
        {
        }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {

            private readonly ILogger<List> _logger;
            private readonly DataContext _context;
            public Handler(DataContext context, ILogger<List> logger)
            {
                _logger = logger;
                _context = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {

                try
                {
                    for (var i = 0; i < 5; i++)
                    {
                        cancellationToken.ThrowIfCancellationRequested();
                        await Task.Delay(1000, cancellationToken);
                        _logger.LogInformation($"Task {i} foi finalizada");
                    }
                }

                catch (Exception ex) when (ex is TaskCanceledException)
                {
                    _logger.LogInformation("A Task foi cancelada");
                }

                return await _context.Activities.ToListAsync();
            }
        }
    }
}