import { useApiDataContext } from '../context/ApiDataContext';
import { CheckCircle, AlertCircle, Copy } from 'lucide-react';
import { useState } from 'react';

const Device39Validator = () => {
  const { apiData, selectedDeviceId } = useApiDataContext();
  const [copied, setCopied] = useState(false);

  const requiredFields = [
    { key: 'consumo_mensal', type: 'array', length: 12, description: 'Consumo mensal' },
    { key: 'consumo_diario_mes_corrente', type: 'array', description: 'Consumo diário do mês corrente' },
    { key: 'minutos_desligado_diario', type: 'array', description: 'Minutos desligado diário' },
    { key: 'minutos_desligado_mensal', type: 'array', length: 12, description: 'Minutos desligado mensal' },
    { key: 'consumo_sem_sistema_diario', type: 'array', description: 'Consumo sem sistema diário' },
    { key: 'consumo_sem_sistema_mensal', type: 'array', length: 12, description: 'Consumo sem sistema mensal' },
    { key: 'meta_consumo_mensal', type: 'array', length: 12, description: 'Meta de consumo mensal' },
    { key: 'meta_consumo_diaria', type: 'array', length: 12, description: 'Meta de consumo diária' },
    { key: 'meta_tempo_atuacao_mensal', type: 'array', length: 12, description: 'Meta de tempo de atuação mensal' },
    { key: 'meta_tempo_atuacao_diaria', type: 'array', length: 12, description: 'Meta de tempo de atuação diária' },
    { key: 'meta_economia_mensal', type: 'array', length: 12, description: 'Meta de economia mensal' },
    { key: 'meta_economia_diaria', type: 'array', length: 12, description: 'Meta de economia diária' },
    { key: 'ocupacao_mensal', type: 'array', length: 12, description: 'Ocupação mensal' },
    { key: 'ocupacao_diaria', type: 'array', description: 'Ocupação diária' },
  ];

  const validateField = (field) => {
    if (!apiData) return { status: 'error', message: 'API data not loaded' };

    const value = apiData[field.key];

    if (value === undefined || value === null) {
      return { status: 'error', message: 'Campo não encontrado na API' };
    }

    if (field.type === 'array') {
      if (!Array.isArray(value)) {
        return { status: 'error', message: 'Não é um array' };
      }

      if (field.length && value.length !== field.length) {
        return { status: 'warning', message: `Array esperado com ${field.length} elementos, recebido ${value.length}` };
      }

      if (value.every(v => v === 0 || v === null)) {
        return { status: 'warning', message: 'Array com todos os valores zero/nulo' };
      }

      return { status: 'success', message: `✓ Array válido (${value.length} elementos)` };
    }

    return { status: 'success', message: '✓ Campo válido' };
  };

  const handleCopyJson = () => {
    if (apiData) {
      const json = JSON.stringify(apiData, null, 2);
      navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const validationResults = requiredFields.map(field => ({
    ...field,
    validation: validateField(field)
  }));

  const stats = {
    total: validationResults.length,
    success: validationResults.filter(r => r.validation.status === 'success').length,
    warning: validationResults.filter(r => r.validation.status === 'warning').length,
    error: validationResults.filter(r => r.validation.status === 'error').length
  };

  if (!apiData) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-700 font-semibold">❌ Dados da API não carregados</p>
        <p className="text-sm text-red-600 mt-2">Selecione um dispositivo para validar os dados</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 shadow-md border border-[#E8DCC8]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-[#1F4532]">Validação de Dados - Dispositivo {selectedDeviceId}</h2>
            <p className="text-sm text-gray-600 mt-1">Verificando todos os campos recebidos da API</p>
          </div>
          <button
            onClick={handleCopyJson}
            className="flex items-center gap-2 px-3 py-2 bg-[#E8DCC8] hover:bg-[#D4CFC0] text-[#1F4532] rounded transition-colors text-sm"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copiado!' : 'Copiar JSON'}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-600 font-semibold">Total</p>
            <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-xs text-green-600 font-semibold">✓ Válidos</p>
            <p className="text-2xl font-bold text-green-900">{stats.success}</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-xs text-yellow-600 font-semibold">⚠️ Avisos</p>
            <p className="text-2xl font-bold text-yellow-900">{stats.warning}</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-xs text-red-600 font-semibold">❌ Erros</p>
            <p className="text-2xl font-bold text-red-900">{stats.error}</p>
          </div>
        </div>
      </div>

      {/* Fields Validation */}
      <div className="bg-white rounded-lg shadow-md border border-[#E8DCC8] overflow-hidden">
        <div className="bg-[#F0EAD2] px-6 py-3 border-b border-[#E8DCC8]">
          <h3 className="font-bold text-[#1F4532]">Campos da API</h3>
        </div>

        <div className="divide-y divide-[#E8DCC8]">
          {validationResults.map((field) => {
            const statusIcon = {
              success: <CheckCircle className="w-5 h-5 text-green-600" />,
              warning: <AlertCircle className="w-5 h-5 text-yellow-600" />,
              error: <AlertCircle className="w-5 h-5 text-red-600" />
            };

            const statusColor = {
              success: 'bg-green-50',
              warning: 'bg-yellow-50',
              error: 'bg-red-50'
            };

            return (
              <div key={field.key} className={`p-4 ${statusColor[field.validation.status]}`}>
                <div className="flex items-start gap-3">
                  {statusIcon[field.validation.status]}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-[#1F4532]">{field.key}</p>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                        {field.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{field.description}</p>
                    <p className={`text-sm mt-2 font-medium ${
                      field.validation.status === 'success'
                        ? 'text-green-700'
                        : field.validation.status === 'warning'
                        ? 'text-yellow-700'
                        : 'text-red-700'
                    }`}>
                      {field.validation.message}
                    </p>

                    {/* Show preview of values */}
                    {Array.isArray(apiData[field.key]) && apiData[field.key].length > 0 && (
                      <div className="mt-2 text-xs bg-gray-100 rounded p-2 overflow-x-auto">
                        <p className="text-gray-600 mb-1">Primeiros valores:</p>
                        <code className="text-gray-800 font-mono">
                          [{apiData[field.key].slice(0, 5).join(', ')}{apiData[field.key].length > 5 ? ', ...' : ''}]
                        </code>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm font-semibold text-blue-900 mb-2">ℹ️ Informações</p>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>• Todos os campos obrigatórios estão sendo validados</li>
          <li>• Campos com array vazio ou todos zeros geram aviso</li>
          <li>• Verifique os erros antes de usar o dashboard</li>
          <li>• Use "Copiar JSON" para analisar os dados brutos</li>
        </ul>
      </div>
    </div>
  );
};

export default Device39Validator;
