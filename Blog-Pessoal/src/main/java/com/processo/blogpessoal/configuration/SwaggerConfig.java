package com.processo.blogpessoal.configuration;

import org.springdoc.core.customizers.OpenApiCustomiser;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.responses.ApiResponse;
import io.swagger.v3.oas.models.responses.ApiResponses;

@Configuration
public class SwaggerConfig {

	@Bean
	public OpenAPI springBlogPessoalOpenAPI() {
		return new OpenAPI()
				.info(new Info()
						.title("Blog Pessoal.")
						.description("Blog Pessoal - Project from a contract process.")
						.version("1.0")
				.contact(new Contact()
						.name("João Victor Mendes Silva")
						.url("https://linkedin.com/in/joosilva")
						.email("joaovictormendessilva1@gmail.com")))
				.externalDocs(new ExternalDocumentation()
						.description("GitHub")
						.url("https://github.com/joosilva/Blog-Pessoal"));
				
	}
	
	@Bean
	public OpenApiCustomiser customerGlobalHeaderOpenApiCustomiser() {
		return openApi -> {
			openApi.getPaths().values().forEach(pathItem -> pathItem.readOperations().forEach(
					operation -> {
						ApiResponses apiResponses = operation.getResponses();
						
						apiResponses.addApiResponse("200", createApiResponse("Sucesso."));
						apiResponses.addApiResponse("201", createApiResponse("Criado."));
						apiResponses.addApiResponse("204", createApiResponse("Excluído."));
						apiResponses.addApiResponse("400", createApiResponse("Erro de requisição."));
						apiResponses.addApiResponse("401", createApiResponse("Não autorizado."));
						apiResponses.addApiResponse("404", createApiResponse("Não encontrado."));
						apiResponses.addApiResponse("500", createApiResponse("Erro no processamento da requisição."));												
					}));
		};
	}
	
	private ApiResponse createApiResponse(String message) {
		return new ApiResponse().description(message);
	}

}
